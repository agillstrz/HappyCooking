import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Layout from "../pages/users/Layout";
import Auth from "../utils/Auth";

function PrivateRoute() {
  if (!Auth.isAuthorization()) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Layout />
      <Outlet />
      <Footer />
    </>
  );
}

export default PrivateRoute;
