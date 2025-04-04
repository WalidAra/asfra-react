import { AuthContext } from "@/contexts";
import { useCallback, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const query = useQueryClient();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const signOut = useCallback(() => {
    setToken(null);
    query.clear();
  }, [query]);

  const contextValue = useMemo(
    () => ({
      accessToken: token,
      isAuthenticated: !!token,
      setToken,
      signOut,
    }),
    [signOut, token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
