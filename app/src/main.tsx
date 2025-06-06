import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContextProvider } from "./context/ContextProvider.tsx";
import { MethodsProvider } from "./fireBase/MethodsData/MethodsProvider.tsx";
import { HistoryProvider } from "./fireBase/HistoryData/HistoryProvider.tsx";
import "./index.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer.tsx";
import { Routing } from "./context/Routing/index.tsx";
import { registerSW } from "virtual:pwa-register";
// Register the service worker for PWA functionality
registerSW({
  immediate: true, // Register the service worker immediately
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <header>
        <Header />
      </header>
      <main>
        <MethodsProvider>
          <HistoryProvider>
            <Routing />
          </HistoryProvider>
        </MethodsProvider>
      </main>
      <footer>
        <Footer />
      </footer>
    </AppContextProvider>
  </StrictMode>
);
