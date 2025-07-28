import { useMutation } from "@tanstack/react-query";
import { register } from "../../api/userapi";

const useRegister = () => {
  const mutation = useMutation({
    mutationFn: register,
  });
  return mutation;
};

export default useRegister;
