import { useQuery } from "@tanstack/react-query";
import { blogCategory } from "../../api/blogapi";

const useBlogCategory = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog-category"],
    queryFn: blogCategory,
  });

  return { data, isLoading, isError, error };
};

export default useBlogCategory;
