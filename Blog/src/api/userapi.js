import axiosInstance from "./axiosInstance";

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/user/register/", data);
    return response.data;
  } catch (error) {
    console.log(" Full backend error response:", error.response);
    throw error.response?.data || error;
  }
};

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/user/login/", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("login error", error.response?.data || error.message);
  }
};
