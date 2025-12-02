import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addTodoAsync } from "../thunks";

type Todo = {
  id: string;
  title: string;
  complete: boolean;
};

type TodosState = {
  list: Todo[];
};
const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleComplete(state, action: PayloadAction<string>) {
      const toggled = state.list.find((todo) => todo.id === action.payload);
      if (toggled) toggled.complete = !toggled.complete;
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
  },
});

export const { toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
