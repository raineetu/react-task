import { useQuery } from "@tanstack/react-query";
import { blog } from "../../api/blogapi";

const useBlog = (page = 1) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog-data", page],
    queryFn: () => blog(page),
    keepPreviousData: true,
  });

  return { data, isLoading, isError, error };
};

export default useBlog;
