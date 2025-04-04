import { Method } from "axios";

export type Fetch = {
  accessToken?: string | null;
  feature: "auth" | "user";
  endpoint: string;
  method: Method;
  payload?: object;
};

export type FetchResponse<T> = {
  data: T;
  message: string;
};

export type AccessToken = {
  accessToken: string;
};

export type User = {
  id: string;
  name: string;
  image: string | null;
  email: string;
  createdAt: Date;
};
