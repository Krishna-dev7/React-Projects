import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlicer";
import inputReducer from "../features/todo/inputSlicer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    input: inputReducer
  }
});