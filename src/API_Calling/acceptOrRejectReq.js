import axios from "axios";
import { removeReq } from "../features/receivedReq/receivedReq";

export default async function acceptOrRejectReq(status, user, dispatch, navigate, setErr) {
    try {
          const res = await axios.post(
            `http://localhost:3002/request/review/${status}/${user}`,
            {},
            { withCredentials: true }
          );

          alert(`${res.data.data.firstName} : ${status}`)
    
          dispatch(removeReq(user));
    
          return navigate("/feed");
    
    
        } catch (err) {
          const error = err.response?.data?.message || err.message;
          setErr((prevErr) => [...prevErr, error]);
    
          console.log(error);
        }
}