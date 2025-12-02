import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addTodoAsync, getTodoAsync, toggleTodoAsync } from "../thunks";

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
  reducers: {
    // toggleComplete(state, action: PayloadAction<string>) {
    //   const toggled = state.list.find((todo) => todo.id === action.payload);
    //   if (toggled) toggled.complete = !toggled.complete;
    // },
    // removeTodo(state, action: PayloadAction<string>) {
    //   state.list = state.list.filter((el) => el.id !== action.payload);
    // },
  },
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
        // TODO Разобраться, почему не жмакается чекбокс
        console.log(toggleTodo);
        console.log(payload);

        state.list = toggleTodo;
      });
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
