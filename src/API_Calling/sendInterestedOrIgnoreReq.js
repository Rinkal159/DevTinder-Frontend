import axios from "axios";
import { addSendReq } from "../features/sendReq/sendRequestSlice";
import { removeFeed } from "../features/feed/feedSlice";

export default async function sendInterestedOrIgnoreReq(token, status, user, dispatch, setErr) {
  try {
    const res = await axios.post(
      `http://localhost:3002/request/send/${status}/${user}`,
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    dispatch(removeFeed(user));

    if (status === "Interested") {
      dispatch(addSendReq(res.data));
    }

  } catch (err) {
    const error = err.response?.data?.message || err.message;
    setErr((prevErr) => [...prevErr, error]);
  }
}