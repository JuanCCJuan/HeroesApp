{/* DEPENDENCIES */}
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

{/* STYLES */}
import './main.css';

{/* COMPONENTS */}
import { App } from './components/App/App';

// Crea la raiz del proyecto
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Renderiza la raiz del proyecto
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);