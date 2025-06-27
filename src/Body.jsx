import Footer from "./Footer";
import NavBar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/user/userSlice";
import { useEffect } from "react";

export default function Body() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  async function getUser() {
    try {
      const user = await axios.get("http://localhost:3002/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(user.data));
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    if (!userData) {
      getUser();
    }
  }, []);

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
