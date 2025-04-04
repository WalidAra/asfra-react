import { lazy } from "react";

export const SignIn = lazy(() => import("@/features/auth/pages/sign-in.tsx"));
export const SignUp = lazy(() => import("@/features/auth/pages/sign-up.tsx"));
