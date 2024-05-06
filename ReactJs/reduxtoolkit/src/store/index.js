import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer, // Register the slice in the store
  },
});

export default store; // Export the store for use in your application
