import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SynergySettings from './SynergySettings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SynergySettings />
  </React.StrictMode>
);