import axios from "axios";
import { addSendReq } from "../features/sendReq/sendRequestSlice";
import { removeFeed } from "../features/feed/feedSlice";

export default async function sendInterestedOrIgnoreReq(status, user, dispatch, setErr) {
    try {
      const res = await axios.post(
        `http://localhost:3002/request/send/${status}/${user}`,
        {},
        { withCredentials: true }
      );

      alert(`${res.data.data.firstName} : ${status}`)

      dispatch(removeFeed(user));

      if (status === "Interested") {
        dispatch(addSendReq(res.data.data));
      }
      
    } catch (err) {
      const error = err.response?.data?.message || err.message;
      setErr((prevErr) => [...prevErr, error]);
    }
}