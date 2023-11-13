import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContextProvider from "./contexts/UserContext";
import environment from './environment';

const {RelayEnvironmentProvider} = require('react-relay');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
