import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Layout() {
  return (
    <div className="bg-[#F9F9F9] font-Poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
