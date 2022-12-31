import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Admin from "../utils/Admin";
import Auth from "../utils/Auth";

function ProtectedRoute() {
  if (Auth.isAuthorization() || Admin.isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
