import React from 'react';
import ReactDOM from 'react-dom/client';
import { RoutingService } from '@/services/RoutingService';
import { AppContextProvider } from '@/context/ContextProvider';
import { BrowserRouter } from 'react-router-dom';
import '@/services/reset.module.scss';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <AppContextProvider>
        <BrowserRouter>
          <RoutingService />
        </BrowserRouter>
      </AppContextProvider>
    </React.StrictMode>,
  );
}
