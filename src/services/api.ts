import { NuxtAppOptions } from "@nuxt/types";
import { AxiosRequestConfig } from "axios";
import Http from "@foxone/utils/http";
import { AxiosResponse } from "axios";
import createEndpoints from "./endpoints";
import { API_BASE } from "@/constants";

function generateStructureInterceptor(app: NuxtAppOptions) {
  return [
    (res: AxiosResponse) => {
      if (res?.data?.error?.code === 401) {
        app.$utils.account.logout(app.store);

        return Promise.reject(res.data.error);
      }

      return Promise.resolve(res.data);
    },
    (error: any) => {
      if (error.response && error.response.data) {
        const status = error.response.status;

        if (status === 401) {
          app.$utils.account.logout(app.store);
        }

        return Promise.reject({ status, ...error.response.data });
      } else {
        return Promise.reject({ status, code: -1 });
      }
    },
  ];
}

function generateAuthInterceptor(app: NuxtAppOptions) {
  return [
    (configs: AxiosRequestConfig): AxiosRequestConfig => {
      const token = app.store?.state.auth.token;

      if (token) {
        configs.headers.Authorization = `Bearer ${token}`;
      }

      return configs;
    },
  ] as any;
}

export default function createApis(app: NuxtAppOptions) {
  const config: AxiosRequestConfig = { baseURL: API_BASE };
  const http = new Http(config, [generateAuthInterceptor(app)], [generateStructureInterceptor(app)]);

  return createEndpoints(http);
}
