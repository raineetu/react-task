import axiosInstance from "./axiosInstance";

export const blog = async (page = 1) => {
  try {
    const response = await axiosInstance.get(`/blog/?page=${page}`);
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

export const blogCategoryID = async ({ id }) => {
  try {
    const response = await axiosInstance.get(`/blog/${id}/`);
    return response;
  } catch (error) {
    console.log("blog-category error", error);
  }
};
