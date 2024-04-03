import React from "react";
import  { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from './Routers/Routers.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './Providers/AuthProvider.jsx';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
