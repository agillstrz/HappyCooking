import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/users/About";
import Deskripsi from "../pages/users/Deskripsi";
import Home from "../pages/users/Home";
import Layout from "../pages/users/Layout";
import Menus from "../pages/users/Menus";
import PrivateAdmin from "./PrivateAdmin";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export const SetUpRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/deskripsi/:id" element={<Deskripsi />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/admin" element={<PrivateAdmin />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
