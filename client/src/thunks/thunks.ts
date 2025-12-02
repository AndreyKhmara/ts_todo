import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (title: string) => {
    const payload = { title, complete: false };
    const response = await axios.post("/todo/add", payload);
    return response.data;
  },
);
