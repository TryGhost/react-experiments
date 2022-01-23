import { configureStore } from "@reduxjs/toolkit";
import { draggableSliceReducer } from "./draggable";

export const store = configureStore({
  reducer: {
    draggable: draggableSliceReducer,
  },
});
