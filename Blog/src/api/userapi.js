import axiosInstance from "./axiosInstance";

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/user/register/", data);
    return response.data;
  } catch (error) {
    console.log("register error", error.response.data);
  }
};
