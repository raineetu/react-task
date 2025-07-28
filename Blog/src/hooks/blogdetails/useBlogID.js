import { useQuery } from "@tanstack/react-query";
import { blogCategoryID } from "../../api/blogapi";

const useBlog = (id) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog-data", id],
    queryFn: ({ queryKey }) => blogCategoryID({ id: queryKey[1] }),
  });

  return { data, isLoading, isError, error };
};

export default useBlog;
