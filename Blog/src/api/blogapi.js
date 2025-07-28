import axiosInstance from "./axiosInstance";

export const blog = async () => {
  try {
    const response = await axiosInstance.get("/blog/");
    return response;
  } catch (error) {
    console.log("blog-category error", error);
  }
};

export const blogCategory = async () => {
  try {
    const response = await axiosInstance.get("/blog-category/");
    return response;
  } catch (error) {
    console.log("blog-category error", error);
  }
};
