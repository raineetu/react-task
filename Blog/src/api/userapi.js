import axiosInstance from "./axiosInstance";

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/user/register/", data);
    return response.data;
  } catch (error) {
    console.log("register error", error.response?.data || error.message);
  }
};

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/user/login/", data);
    return response.data;
  } catch (error) {
    console.log("login error", error.response?.data || error.message);
  }
};
