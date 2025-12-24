import { login, register } from "../models/auth/authSlice";

export const handleLogin = (dispatch, payload) => {
  dispatch(login(payload));
};

export const handleRegister = (dispatch, payload) => {
  dispatch(register(payload));
};
