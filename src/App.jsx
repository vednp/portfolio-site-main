import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "@mui/icons-material";

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
