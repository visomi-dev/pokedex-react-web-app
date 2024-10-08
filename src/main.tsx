import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/app';

import '@/lib/i18n';

import './index.css';

const root = document.getElementById('root');

if (root != null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
