import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StripeProvider from './StripeProvider';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <StripeProvider>
      <App />
    </StripeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
