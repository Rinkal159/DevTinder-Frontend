import { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import DeleteProfile from "./DeleteProfile";
import Error from "./Error";

import deleteMyProfile from "./API_Calling/deleteMyProfile";
import dispatchEmoty from "./API_Calling/dispatchEmoty";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function Settings() {
  const { getAccessTokenSilently, logout } = useAuth0();
  const [profile, setProfile] = useState(false);
  const [appe, setAppe] = useState(false);

  const [remove, setRemove] = useState(false);

  const [err, setErr] = useState([]);
  const [myLogout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // delete profile
  async function handleDelete() {
    const token = await getAccessTokenSilently();
    await deleteMyProfile(token, setRemove, setErr);

    dispatchEmoty(dispatch);
    logout({ logoutParams: { returnTo: "http://localhost:5173/index" } });
  }

  return (
    <div className="w-1/2 mx-auto">
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      <h1 className="navbar-headings pt-4">Settings</h1>
      <div className="w-full">
        {/* PROFILE */}
        <div className="flex flex-col w-full">
          <h1
            onClick={() => {
              profile ? setProfile(false) : setProfile(true);
            }}
            className="heading"
          >
            {profile ? (
              <i className="fa-solid fa-chevron-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
            &nbsp;&nbsp;Profile
          </h1>

          {profile && (
            <div className="w-1/2 self-center">
              <h1 className="individual-heading">
                <Link to={"/updateProfile"} className="justify-between">
                  Update Profile
                </Link>
              </h1>
              <h1 className="individual-heading">
                <Link to={"/updateProfilePicture"} className="justify-between">
                  Update Profile Picture
                </Link>
              </h1>
              <h1 className="individual-heading">
                <a onClick={() => setRemove(true)}>Delete Profile</a>
              </h1>
            </div>
          )}
        </div>

        <hr />

        {/* APPEARENCE */}
        <div>
          <h1
            onClick={() => {
              appe ? setAppe(false) : setAppe(true);
            }}
            className="heading"
          >
            {appe ? (
              <i className="fa-solid fa-chevron-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
            &nbsp;&nbsp;Appearence
          </h1>
        </div>
        <hr />
      </div>

      {remove && (
        <DeleteProfile
          cancel={() => {
            setRemove(false);
          }}
          remove={handleDelete}
        />
      )}
    </div>
  );
}
