import { useState } from "react";
import { addUser, logoutUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Logout({ cancel, logout }) {
  return (
    <div className="outer-logout">
      <div className="inner-logout">
        <h1 className="pb-3  text-lg font-semibold">Logout</h1>
        <div className="logout-func">
          <p>Are you sure you want to Logout?</p>
          <div className="outer-btns">
            <div className="btns">
              <button className="btn" onClick={cancel}>
                Cancel
              </button>
              <button className="btn logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NavBar() {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, setLogout] = useState(false);

  async function handleLogout() {
    await axios.post(
      "http://localhost:3002/logout",
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(addUser(null));
    setLogout(false);

    alert("User Logged out Successfully!");

    return navigate("/index");
  }

  function goToLogin() {
    return navigate("/login");
  }

  return (
    <div className="navbar bg-base-300 shadow-sm absolute top-0 z-10 bg-black text-white z-0">
      <div className="flex-1">
        <Link to={"/index"} className="btn btn-ghost text-2xl">
          <i className="fa-solid fa-code"></i>DevTinder
        </Link>
      </div>

      {state ? (
        <div className="flex gap-2 items-center">
          {state && <p>Welcome, {state.firstName}</p>}

          <div className="dropdown dropdown-end mx-4">
            <div tabIndex={0} role="button" className="w-10">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>

            {!logout && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="hover:bg-black">
                  <Link to={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li className="hover:bg-black">
                  <Link to={"/settings"} >Settings</Link>
                </li>
                <li className="hover:bg-black">
                  <a onClick={() => setLogout(true)}>Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={goToLogin}
            className="btn btn-neutral rounded-full bg-[#0466c8] hover:bg-[#0054b1] px-5 mr-4"
          >
            LOGIN
          </button>
        </div>
      )}

      {logout && (
        <Logout
          cancel={() => {
            setLogout(false);
          }}
          logout={handleLogout}
        />
      )}
    </div>
  );
}
