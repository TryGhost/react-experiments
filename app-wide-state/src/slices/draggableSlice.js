import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDragging: false,
};

export const draggableSlice = createSlice({
  name: "draggable",
  initialState,
  reducers: {
    startDragging: (state) => {
      state.isDragging = true;
    },
    stopDragging: (state) => {
      state.isDragging = false;
    },
  },
});

export const {
  actions: { startDragging, stopDragging },
  reducer: draggableSliceReducer,
} = draggableSlice;
