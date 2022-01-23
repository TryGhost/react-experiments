import { configureStore } from "@reduxjs/toolkit";
import { draggableSliceReducer } from "./slices";

export const store = configureStore({
  reducer: {
    draggable: draggableSliceReducer,
  },
});
