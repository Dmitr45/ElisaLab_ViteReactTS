import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContextProvider } from "./context/ContextProvider.tsx";
import { AuthProvider } from "./fireBase/Auth/AuthProvider.tsx";
import { MethodsProvider } from "./fireBase/MetodsData/MethodsProvider.tsx";
import "./index.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer.tsx";
import { Routing } from "./context/Routing/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <AuthProvider>
        <header>
          <Header />
        </header>
        <main>
          <MethodsProvider>
            <Routing />
          </MethodsProvider>
        </main>
        <footer>
          <Footer />
        </footer>
      </AuthProvider>
    </AppContextProvider>
  </StrictMode>
);
