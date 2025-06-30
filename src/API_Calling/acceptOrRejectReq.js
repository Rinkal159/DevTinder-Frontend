import axios from "axios";
import { removeReq } from "../features/receivedReq/receivedReq";
import { addConnections } from "../features/connections/connectionsSlice";

export default async function acceptOrRejectReq(status, user, dispatch, setErr, navigate) {
    try {

      console.log("at axios : " + user._id);
      
          const res = await axios.post(
            `http://localhost:3002/request/review/${status}/${user._id}`,
            {},
            { withCredentials: true }
          );

          alert(`${res.data.data.firstName} : ${status}`)
    
          dispatch(removeReq(user._id));

          if(status==="Accept") {
            dispatch(addConnections(user))
          }
    
          return navigate("/feed");
    
    
        } catch (err) {
          const error = err.response?.data?.message || err.message;
          setErr((prevErr) => [...prevErr, error]);
    
          console.log(error);
        }
}