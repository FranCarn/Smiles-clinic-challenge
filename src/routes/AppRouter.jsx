import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../auth/context/AuthProvider";
import { Layout } from "../layout/layout";

import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Login } from "../pages/Login/Login";
import { PrivateRoutes, PublicRoutes } from "./";

export const AppRouter = () => {
  return (
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        limit={3}
      />

      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  );
};
