import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const statusIsOk = (status: number) => [200, 201].includes(status);

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

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async ({ id, complete }: { id: number; complete: boolean }) => {
    const response = await axios.patch(`/todo/completed/${id}`, {
      complete,
    });
    console.log("res1111:", response);
    if (statusIsOk(response.status)) {
      return { id, complete };
    }
  },
);
