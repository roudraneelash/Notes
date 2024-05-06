import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: false,
  },
];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleState: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((todo) => todo.id === id); // Find index by ID

      if (index >= 0) {
        state[index].completed = !state[index].completed; // Toggle completion status
      } else {
        console.error(`Todo item with ID ${id} not found`); // Log error if index is -1
      }
    },
    addItem: (state, action) => {
      const newItem = {
        id: state.length + 5,
        todo: action.payload,
        completed: false,
      };
      state.push(newItem);
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      const { id } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      state.splice(index, 1);
    },
  },
});

export const { toggleState, addItem, removeItem } = todoSlice.actions;
export default todoSlice.reducer;
