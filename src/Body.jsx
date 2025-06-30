import Footer from "./Footer";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
  );
}
