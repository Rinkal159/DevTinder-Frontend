import { useEffect, useState } from "react";
import './globalColors.css';
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./features/user/userSlice";

import Error from "./Error";
import dispatchEmoty from "./API_Calling/dispatchEmoty";
import Loading from "./Loading";

export default function Existence() {
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  useEffect(() => {
    async function checkExi() {
      if (isLoading || !isAuthenticated || !user) return;
      try {
        const email = user.email;
        console.log(email);

        const res = await axios.post(
          "http://localhost:3002/existence",
          {
            email,
          },
          {
            withCredentials: true,
          }
        );

        setLoad(false);

        if (res.data) {
          dispatch(addUser(res.data));
          navigate("/feed");
        } else {
          navigate("/createProfile");
        }
      } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
      }
    }
    checkExi();
  }, [isLoading, isAuthenticated, user, navigate, setErr]);

  function handleNavigate() {
    dispatchEmoty(dispatch);

    logout({ logoutParams: { returnTo: "http://localhost:5173/index" } });
  }

  return (
    <div>
      {load && (
        <Loading
          msg="Validating you"
        />
      )}

      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={handleNavigate} />}
    </div>
  );
}
