import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getJWTFromStaffAccessToken } from "../utils/jwt";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: async (args, api, extraOptions) => {
    const { siteUrl, staffAccessToken } = api.getState().config;

    const jwt = await getJWTFromStaffAccessToken(staffAccessToken);

    const defaultQuery = fetchBaseQuery({
      baseUrl: `${siteUrl}/ghost/api/canary/admin/`,
      prepareHeaders: (headers) => {
        headers.set("Authorization", `Ghost ${jwt}`);
        return headers;
      },
    });

    return defaultQuery(args, api, extraOptions);
  },
  endpoints: (builder) => ({
    getSite: builder.query({
      query: () => "site/",
    }),
  }),
});

export const { useGetSiteQuery } = adminApi;
