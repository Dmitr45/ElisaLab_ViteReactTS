import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppContextProvider } from "./context/ContextProvider.tsx";
import './index.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
          <header>
            <Header/>
          </header>
          <main>
              {/* <Routing/> */}
          </main>
          <footer>
            <Footer/>
          </footer>
    </AppContextProvider>
  </StrictMode>,
)
