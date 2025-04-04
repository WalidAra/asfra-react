import React, { useCallback } from "react";
import { AuthTypeProps } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { setAuthTokenUpdater } from "@/lib";
import { AuthContext } from "@/contexts";

const AuthInset = ({
  children,
  paramToken,
  isLoading,
}: AuthTypeProps & { isLoading: boolean }) => {
  const queryClient = useQueryClient();
  const [token, setToken] = React.useState<string | null>(paramToken);

  React.useEffect(() => {
    if (!token && paramToken) {
      setToken(paramToken);
    }
  }, [paramToken, token]);

  React.useEffect(() => {
    setAuthTokenUpdater(setToken);
  }, [setToken]);

  const signOut = useCallback(() => {
    queryClient.clear();
    setToken(null);
  }, [queryClient]);

  const contextValue = React.useMemo(
    () => ({
      isLoading,
      accessToken: token,
      signOut,
      setToken,
    }),
    [isLoading, token, signOut]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthInset;
