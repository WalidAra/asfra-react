import { Outlet, RouteObject } from "react-router-dom";
import { AuthLayout } from "@/features/auth/components/templates";
import { SignIn, SignUp } from "@/features/auth/pages";

export const authRoutes: RouteObject[] = [
  {
    path: "auth",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
];
