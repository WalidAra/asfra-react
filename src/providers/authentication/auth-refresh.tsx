import { AccessToken, AuthTypeProps } from "@/types";
import AuthInset from "@/providers/authentication/auth-inset.tsx";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib";
import { useLocation } from "react-router-dom";

const AuthRefresh = ({ children, paramToken }: AuthTypeProps) => {
  const { pathname } = useLocation();
  const { isLoading, data } = useQuery({
    queryFn: () =>
      fetchData<AccessToken>({
        endpoint: "refresh",
        method: "GET",
        feature: "auth",
      }),
    queryKey: ["refresh"],
    enabled: !paramToken,
  });

  if (isLoading && pathname !== "/") return null;

  return (
    <AuthInset
      isLoading={isLoading}
      paramToken={data?.data?.accessToken ?? paramToken ?? null}
    >
      {children}
    </AuthInset>
  );
};
export default AuthRefresh;
