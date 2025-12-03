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

    if (statusIsOk(response.status)) {
      return { id, complete };
    }
  },
);

export const editTodoAsync = createAsyncThunk(
  "todos/editTodoAsync",
  async ({ id, title }: { id: number; title: string }) => {
    const response = await axios.patch(`/todo/edit/${id}`, {
      title,
    });

    if (statusIsOk(response.status)) {
      return { id, title };
    }
  },
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id: number) => {
    await axios.delete(`/todo/${id}`);
    return id;
  },
);
