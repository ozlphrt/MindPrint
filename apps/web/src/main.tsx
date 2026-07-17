import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Programmatically force clear active PWA service workers and cache storage to bypass sticky caches
const CURRENT_VERSION = '1.0.3';
if (typeof window !== 'undefined' && localStorage.getItem('mindprint_version') !== CURRENT_VERSION) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }
  if ('caches' in window) {
    caches.keys().then(names => {
      for (const name of names) {
        caches.delete(name);
      }
    });
  }
  localStorage.setItem('mindprint_version', CURRENT_VERSION);
  setTimeout(() => {
    window.location.reload();
  }, 300);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
