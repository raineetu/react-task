import { useQuery } from "@tanstack/react-query";
import { blog } from "../../api/blogapi";

const useBlog = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog-data"],
    queryFn: blog,
  });

  return { data, isLoading, isError, error };
};

export default useBlog;
