import React from 'react';
import ReactDOM from 'react-dom/client';
import 'rsuite/dist/rsuite.min.css';
import './index.css';
import App from './App';
import DarkModeProvider from './context/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  
);


