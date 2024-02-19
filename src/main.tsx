import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@pages/App';
import { AuthProvider } from '@contexts/auth';
import { TasksProvider } from '@contexts/tasks';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  </React.StrictMode>
);
