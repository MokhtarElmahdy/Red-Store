import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import FooterComponent from './Components/FooterComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>

    <App />
    </BrowserRouter>
    <FooterComponent/>
  </React.StrictMode>
);

reportWebVitals();
