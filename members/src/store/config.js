import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    siteUrl: process.env.REACT_APP_SITE_URL,
    staffAccessToken: process.env.REACT_APP_STAFF_ACCESS_TOKEN,
  },
  reducers: {
    setConfig: (state, { payload: { siteUrl, staffAccessToken } }) => {
      state.siteUrl = siteUrl;
      state.staffAccessToken = staffAccessToken;
    },
  },
});

export const {
  actions: { setConfig },
} = configSlice;
