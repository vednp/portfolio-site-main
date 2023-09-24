import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
function Layout() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Layout;
