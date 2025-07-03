import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./index.css";
import Error from "./Error";
import { useAuth0 } from "@auth0/auth0-react";
import dispatchEmoty from "./API_Calling/dispatchEmoty";

export default function NavBar() {
  const { user, isAuthenticated, logout } = useAuth0();

  const state = useSelector((state) => state.user);

  const [err, setErr] = useState([]);
  const [mylogout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatchEmoty(dispatch);

    logout({ logoutParams: { returnTo: "http://localhost:5173/index" } });
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
              <div tabIndex={0} role="button" className="">
                <img
                  src={state.img}
                  alt={`${state.firstName} ${state.lastName}`}
                  className="rounded-full object-cover w-12 h-12 "
                />
              </div>

              {!mylogout && (
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

                  {isAuthenticated && (
                    <h1 className="menu-hover border-none">
                      <a onClick={() => setLogout(true)}>Logout</a>
                    </h1>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          isAuthenticated && (
            <div className="dropdown dropdown-end flex items-center gap-x-4">
              <p className="text-lg">Hello {user.nickname}</p>
              <div tabIndex={0} role="button" className="">
                <img
                  src={user.picture}
                  alt={`${user.nickname}`}
                  className="rounded-full object-cover w-12 h-12 "
                />
                <div
                  tabIndex={0}
                  className="bg-blue-800 hover:bg-blue-900 flex flex-col menu menu-sm dropdown-content rounded-box z-1 mt-5 shadow"
                >
                  <h1 onClick={handleLogout} className="px-2 py-1 hover:font-semibold">Logout</h1>
                </div>
              </div>
            </div>
          )
        )}

        {mylogout && (
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
