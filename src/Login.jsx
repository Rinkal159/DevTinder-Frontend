import { useState } from "react";
import "./index.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./features/user/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("rinkal@gmail.com");
  const [passWord, setPassword] = useState("Rinkal@123");

  const [err, setErr] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          passWord,
        },
        {
          withCredentials: true,
        }
      );

      alert("User logged in successfully!");
      dispatch(addUser(res.data.data));

      console.log(res.data.data);

      return navigate("/feed");
    } catch (err) {
      const errors = err.response?.data?.message || err.message;

      setErr((prevErr) => [...prevErr, errors]);
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-70px)] justify-center items-center">
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

          <a
            href="#"
            className="hover:underline text-center text-[#0466c8] pt-2 pb-3"
          >
            Forgot password?
          </a>

          <button
            onClick={handleClick}
            className="btn btn-primary btn-block bg-[#0466c8] hover:bg-[#0353a4]"
          >
            setAuthCookie()
          </button>
        </div>
      </div>

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
