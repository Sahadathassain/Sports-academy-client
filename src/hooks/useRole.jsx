
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";




const useRole = () => {
  const { user } = useAuth();
console.log(user);
  const axiosSecure = useAxiosSecure();

  const {
    data: role = "",
 
    isError,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email || !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      console.log(res);
      return res.data.role;
    },
  });

  return {
    role,
 
    isError,
  };
};

export default useRole;
