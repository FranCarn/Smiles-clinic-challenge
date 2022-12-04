import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../auth/context/AuthProvider";
import { Layout } from "../layout/layout";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Login } from "../pages/Login/Login";
import { PrivateRoutes, PublicRoutes } from "./";

export const AppRouter = () => {
  return (
    <AuthProvider>
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
