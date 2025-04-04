import { Fetch, FetchResponse } from "@/types";
import { api } from "@/utils";
import { env } from "@/config";
import { AxiosRequestConfig } from "axios";

const { bearer, apiKey } = env;

const fetchData = async <T>({
  endpoint,
  accessToken,
  feature,
  method,
  payload,
}: Fetch): Promise<FetchResponse<T>> => {
  const url = `/api/${feature}/${endpoint}`;
  const axiosConfig: AxiosRequestConfig = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && { [bearer]: `${apiKey} ${accessToken}` }),
    },
    withCredentials: true,
    data: payload,
  };

  const res = await api(axiosConfig);
  return res.data as FetchResponse<T>;
};

export default fetchData;
