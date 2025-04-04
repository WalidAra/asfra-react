// import { AuthProvider } from "@/providers";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Router />
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
};

export default App;
