import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Admin from "../utils/Admin";
import Auth from "../utils/Auth";

function PrivateAdmin() {
  if (!Admin.isAdmin() && !Auth.isAuthorization()) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default PrivateAdmin;
