import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

//reportWebVitals();
