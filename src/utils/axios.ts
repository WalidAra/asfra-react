/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { env } from "@/config";
import { getAuthTokenUpdater } from "@/lib";

const { apiURl, bearer, apiKey } = env;
const api = axios.create({ baseURL: apiURl });

let isRefreshing = false;
let failedRequestsQueue: object[] = [];

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            resolve,
            reject,
            config: originalRequest,
          });
        })
          .then(() => {
            return api(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axios.get(`${apiURl}/api/public/auth/refresh`, {
          withCredentials: true,
        });

        const { accessToken } = res.data.data;
        const authHeader = `${apiKey} ${accessToken}`;

        api.defaults.headers.common[bearer] = authHeader;
        originalRequest.headers[bearer] = authHeader;

        failedRequestsQueue.forEach(({ config, resolve }: any) => {
          config.headers[bearer] = authHeader;
          resolve();
        });

        const updateToken = getAuthTokenUpdater();
        if (updateToken) updateToken(accessToken);

        return api(originalRequest);
      } catch (err) {
        failedRequestsQueue.forEach(({ reject }: any) => reject(err));
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
        failedRequestsQueue = [];
      }
    }
    return Promise.reject(error);
  }
);

export default api;
