import { createContext } from "react";

type AuthContextProps = {
  accessToken: string | null;
  signOut: () => void;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextProps>({
  accessToken: null,
  signOut: () => {},
  setToken: () => {},
  isAuthenticated: false,
});
