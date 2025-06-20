import Footer from "./Footer";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar />
      <main className="flex-grow flex flex-col">
      <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
