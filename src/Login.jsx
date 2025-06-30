import { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import login from "./API_Calling/login";
import Error from "./Error";

export default function Login() {
  const [email, setEmail] = useState("rinkal@gmail.com");
  const [passWord, setPassword] = useState("Rinkal@123");

  const [err, setErr] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // login
  async function handleClick() {
    await login(email, passWord, dispatch, navigate, setErr);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-70px)] justify-center items-center">
      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      <div className="card bg-base-100 shadow-sm w-full max-w-sm bg-black hover:shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Login
          </h2>
          <input
            className="inputLogin"
            type="text"
            name="Email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputLogin"
            type="text"
            name="Password"
            id="password"
            placeholder="Password"
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link className="hover:underline text-center text-[#0466c8] pt-2 pb-3">
            Forgot password?
          </Link>

          <button
            onClick={handleClick}
            className="btn btn-primary btn-block bg-[#0466c8] hover:bg-[#0353a4]"
          >
            setAuthCookie()
          </button>
        </div>
      </div>
    </div>
  );
}
