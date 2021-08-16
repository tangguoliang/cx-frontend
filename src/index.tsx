import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);