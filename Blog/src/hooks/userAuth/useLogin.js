import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/userapi";

const useLogin = () => {
  const mutation = useMutation({
    mutationFn: login,
  });
  return mutation;
};

export default useLogin;
