import Footer from "./Footer";
import NavBar from "./Navbar";
import "./globalColors.css";
import "./index.css";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <div className="min-h-screen flex flex-col bg-navbarColor shadow-xl">
      <NavBar />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
