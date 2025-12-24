import axiosInstance from "../utils/axiosInstance";

export const registerUser = async (payload) => {
  const response = await axiosInstance.post("/registration", payload);
  return response.data;
};

export const loginUser = async (payload) => {
  const response = await axiosInstance.post("/login", payload);
  return response.data;
};
