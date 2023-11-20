import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContextProvider from "./contexts/UserContext";
import environment from './environment';

const {RelayEnvironmentProvider} = require('react-relay');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RelayEnvironmentProvider environment={environment}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </RelayEnvironmentProvider>
    </Suspense>
  </React.StrictMode>
);
