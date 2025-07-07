import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";
import ToggleButton from "./ToggleButton";

export default function Index() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const navigate = useNavigate();

  function handleFeed() {
    return navigate("/feed");
  }

  return (
    <div>
      <h1 className="devTinder-heading">
        <i className="fa-solid fa-code"></i>&nbsp;DevTinder
      </h1>

      <div className="index">
        <h1 className="text-7xl font-medium text-index">
          Find Your README of Life.
        </h1>
        {isAuthenticated ? (
          <button onClick={handleFeed} className="index-btn">
            Feed()
          </button>
        ) : (
          <button
            onClick={() =>
              loginWithRedirect({
                authorizationParams: { prompt: "login" },
              })
            }
            className="index-btn"
          >
            Init()
          </button>
        )}

      </div>


      <Footer />
    </div>
  );
}
