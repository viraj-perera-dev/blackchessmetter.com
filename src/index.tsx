import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-5PZ24L9W',
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
