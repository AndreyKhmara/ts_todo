import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAsync = createAsyncThunk("user/getUserAsync", async () => {
  const response = await axios.get("/auth/me");
  return response.data;
});

export const registerUserAsync = createAsyncThunk(
  "user/registerUserAsync",
  async ({ login, password }: { login: string; password: string }) => {
    const response = await axios.post("/auth/register", { login, password });
    return response.data; // { user: {...}, token: "123" }
  },
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUserAsync",
  async ({ login, password }: { login: string; password: string }) => {
    const response = await axios.post("/auth/login", { login, password });
    return response.data; // { user: {...}, token: "123" }
  },
);
