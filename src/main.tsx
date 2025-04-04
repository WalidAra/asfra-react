import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TanStackQueryProvider, ThemeProvider } from "./providers";
import App from "./app/app";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <TanStackQueryProvider>
        <App />
      </TanStackQueryProvider>
    </ThemeProvider>
  </StrictMode>
);
