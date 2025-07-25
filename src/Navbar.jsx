import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import './globalColors.css';
import "./index.css";
import Error from "./Error";
import { useAuth0 } from "@auth0/auth0-react";
import dispatchEmoty from "./API_Calling/dispatchEmoty";
import ToggleButton from "./ToggleButton";

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
          <Link to={"/index"} className="devTinder">
            <i className="fa-solid fa-code"></i>&nbsp;DevTinder
          </Link>
        </div>

        {state ? (
          <div className="flex gap-1 items-center">
            <ToggleButton />

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
            <h1 onClick={handleLogout} className="logout-navbar">
              Logout
            </h1>
          )
        )}

        {mylogout && (
          <Logout
            cancel={() => {
              setLogout(false);
            }}
            logout={handleLogout}
            heading='Logout'
            warning='Are you sure you want to Logout?'
          />
        )}
      </div>
    </div>
  );
}
