import axios from "axios";
import { addUser } from "../features/user/userSlice";
import { addFeed } from "../features/feed/feedSlice";
import { setSendReqStateEmpty, addSendReqProfile } from "../features/sendReq/sendRequestSlice";
import { setReceivedReqEmpty, addReceivedReqProfile } from "../features/receivedReq/receivedReq";
import { setConnectionsEmpty } from "../features/connections/connectionsSlice";

export default async function myLogout(setLogout, dispatch, navigate, setErr) {
    try {
          await axios.post(
            "http://localhost:3002/logout",
            {},
            {
              withCredentials: true,
            }
          );


          dispatch(addUser(null)); 
          dispatch(addFeed(null));
          dispatch(setSendReqStateEmpty([]));
          dispatch(addSendReqProfile(null));
          dispatch(setReceivedReqEmpty([]));
          dispatch(addReceivedReqProfile(null));
          dispatch(setConnectionsEmpty([]));

    
          setLogout(false);
    
          alert("User Logged out Successfully!");
    
          return navigate("/index");

        } catch (err) {
          const error = err.response?.data?.message || err.message;
          setErr((prevErr) => [...prevErr, error]);
        }
}