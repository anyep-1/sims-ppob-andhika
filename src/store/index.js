import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../models/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
