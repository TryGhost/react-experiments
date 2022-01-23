import { createSlice } from "@reduxjs/toolkit";

export const draggableSlice = createSlice({
  name: "draggable",
  // This is the initial state that we'll populate the store is – as the user
  // isn't dragging when they first reach the application, we set `isDragging`
  // to `false`.
  initialState: {
    isDragging: false,
  },
  // This is a pair of reducers that we use to change the value of `isDragging`.
  // They're called by the `Dropdown` component, when the user interacts with
  // the UI.
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
