// src/main.tsx or src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // or './App.js'
import './index.css'; // or other global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* <--- Check this line */}
    <App />
  </React.StrictMode>,
);