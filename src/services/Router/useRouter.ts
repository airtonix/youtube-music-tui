import { useContext } from "react";
import { RouterContext } from "./RouterContext";

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context)
    throw new Error(
      "useAuth must only be used within children of <AuthProvider/>"
    );
  return context;
};
