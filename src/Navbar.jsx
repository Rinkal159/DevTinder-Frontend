import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./index.css";
import Error from "./Error";
import DeleteProfile from "./DeleteProfile";

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
    alert(`User logged out successfully!`)
  }
  

  function goToLogin() {
    return navigate("/login");
  }

  return (
    <div>
      <div className="navbar">
        {/* Error */}
        {err.length > 0 && <Error err={err} setErr={setErr} />}

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
                <div
                  tabIndex={0}
                  className="bg-gray-900 flex flex-col menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 shadow"
                >
                  <h1 className="menu-hover">
                    <Link to={"/profile"} className="justify-between">
                      Profile
                    </Link>
                  </h1>
                  
                  <h1 className="menu-hover">
                    <Link to={"/settings"}>Settings</Link>
                  </h1>
                  
                  <h1 className="menu-hover border-none">
                    <a onClick={() => setLogout(true)}>Logout</a>
                  </h1>
                </div>
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
    </div>
  );
}
