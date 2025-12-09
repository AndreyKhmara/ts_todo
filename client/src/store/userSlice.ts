import { createSlice } from "@reduxjs/toolkit";
import { getUserAsync, loginUserAsync } from "../thunks";

interface User {
  login: number | null;
  password: string | null;
}

interface UserState {
  user: User | null;
  token: string | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  isAuth: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuth = true;
      })
      .addCase(getUserAsync.rejected, (state) => {
        state.user = null;
        state.isAuth = false;
      });

    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка авторизации";
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
