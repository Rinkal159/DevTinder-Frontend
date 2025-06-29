import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./index.css";

import myLogout from "./API_Calling/myLogout";

export default function NavBar() {
  const state = useSelector((state) => state.user);

  const [err, setErr] = useState([]);
  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  // logout
  async function handleLogout() {
    await myLogout(setLogout, dispatch, navigate, setErr);

  }

  function goToLogin() {
    return navigate("/login");
  }

  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <Link to={"/index"} className="btn btn-ghost text-2xl">
            <i className="fa-solid fa-code"></i>DevTinder
          </Link>
        </div>

        {state ? (
          <div className="flex gap-2 items-center">
            {state && <p>Welcome, {state.firstName}</p>}

            <div className="dropdown dropdown-end mx-4">
              <div tabIndex={0} role="button" className="w-14">
                <img
                  src={state.img}
                  alt={`${state.firstName} ${state.lastName}`}
                  className="rounded-full"
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
                    <Link to={"/settings"}>Settings</Link>
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
      
      {/* Error */}
      {err.length > 0 && (
        <div className="outer-error">
          <div className="inner-error">
            <button className="close-btn" onClick={() => setErr([])}>
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h2 className="err-heading">Error</h2>
            <ul>
              {err.map((li, i) => (
                <li className="errors" key={i}>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
