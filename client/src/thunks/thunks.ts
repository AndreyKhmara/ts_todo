import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoAsync = createAsyncThunk("todos/getTodoAsync", async () => {
  const response = await axios.get("/todo");
  return response.data;
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (title: string) => {
    const payload = { title, complete: false };
    const response = await axios.post("/todo/", payload);
    return response.data;
  },
);
