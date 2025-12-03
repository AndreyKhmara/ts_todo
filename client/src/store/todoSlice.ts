import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoAsync,
  deleteTodoAsync,
  editTodoAsync,
  getTodoAsync,
  toggleTodoAsync,
} from "../thunks";

type Todo = {
  id: number;
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodoAsync.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const { payload } = action;

        const toggleTodo = state.list.map((el) => {
          if (el.id === payload?.id) {
            return { ...el, complete: payload?.complete };
          }
          return el;
        });
        state.list = toggleTodo;
      })
      .addCase(editTodoAsync.fulfilled, (state, action) => {
        const { payload } = action;

        const editTodo = state.list.map((el) => {
          if (el.id === payload?.id) {
            return { ...el, title: payload?.title };
          }
          return el;
        });
        state.list = editTodo;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        const id = action.payload;
        const newState = state.list.filter((el) => el.id !== id);

        state.list = newState;
      });
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
