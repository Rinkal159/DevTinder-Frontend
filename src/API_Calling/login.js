import axios from "axios";
import { addUser } from "../features/user/userSlice";

export default async function login(email, passWord, dispatch, navigate, setErr) {
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
      return navigate("/feed");

    } catch (err) {
      const error = err.response?.data?.message || err.message;
      setErr((prevErr) => [...prevErr, error]);
    }
}