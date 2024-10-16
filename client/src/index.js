import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals

// Create a root
const root = createRoot(document.getElementById('root'));

// Render the app using createRoot
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Call reportWebVitals for performance tracking
reportWebVitals();
