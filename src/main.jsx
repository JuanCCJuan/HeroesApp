{/* STYLES */}
import './main.css';

{/* DEPENDENCIES */}
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

{/* PROVIDERS */}
import { AppContextProvider } from './providers/AppContextProvider';

{/* COMPONENTS */}
import { App } from './components/App/App';

// Crea la raiz del proyecto
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Renderiza la raiz del proyecto
root.render(
  <React.StrictMode>
    <HashRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </HashRouter>
  </React.StrictMode>
);