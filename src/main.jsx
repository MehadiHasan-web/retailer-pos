import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from './Routers/Routers.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './Providers/AuthProvider.jsx';
import LoadingProvider from "./Providers/LoadingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <LoadingProvider>
        <RouterProvider router={router} />
        </LoadingProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
