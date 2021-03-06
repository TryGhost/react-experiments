import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getJWTFromStaffAccessToken } from "../utils/jwt";
import camelcaseKeys from "camelcase-keys";

const injectQueryString = (endpoint, query = {}) =>
  `${endpoint}?${new URLSearchParams(query).toString()}`;

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

    const response = await defaultQuery(args, api, extraOptions);

    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true });
    }

    return response;
  },
  endpoints: (builder) => ({
    getSite: builder.query({
      query: () => "site/",
    }),
    getMembers: builder.query({
      query: ({ page, filters = {} }) =>
        injectQueryString("members/", {
          ...filters,
          page,
          order: "created_at desc",
          limit: 50,
        }),
    }),
  }),
});

export const { useGetSiteQuery, useGetMembersQuery } = adminApi;
