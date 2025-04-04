import { authRoutes } from "@/features/auth";
import { AppLanding } from "@/features/home";
import { rootRoutes } from "@/features/root";
import { useRoutes } from "react-router-dom";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <AppLanding />,
    },
    ...authRoutes,
    ...rootRoutes,
  ]);
};

export default Router;
