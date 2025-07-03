import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function Index() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const myUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  
  function handleFeed() {
    return navigate("/feed");
  }

  return (
    <div className="flex h-[calc(100vh-70px)] flex-col gap-y-8 justify-center items-center">
      <h1 className="text-7xl font-black">Find Your README of Life.</h1>
      {isAuthenticated ? (
        <button
          onClick={handleFeed}
          className="btn btn-neutral btn-outline rounded-full text-2xl px-7 py-7"
        >
          Feed()
        </button>
      ) : (
        <button
          onClick={() =>
            loginWithRedirect({
              authorizationParams: { prompt: "login" }})
          }
          className="btn btn-neutral btn-outline rounded-full text-2xl px-7 py-7"
        >
          Init()
        </button>
      )}
    </div>
  );
}
