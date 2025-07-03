import axios from "axios";
import { removeReq } from "../features/receivedReq/receivedReq";
import { addConnections } from "../features/connections/connectionsSlice";

export default async function acceptOrRejectReq(token, status, user, dispatch, setErr, navigate) {
    try {
      
          const res = await axios.post(
            `http://localhost:3002/request/review/${status}/${user}`,
            {},
            { withCredentials: true,
              headers : {
                Authorization : `Bearer ${token}`
              }
             },
            
          );
          
    
          dispatch(removeReq(user));

          if(status==="Accept") {
            dispatch(addConnections(res.data))
          }
    
          return navigate("/feed");
    
    
        } catch (err) {
          const error = err.response?.data?.message || err.message;
          setErr((prevErr) => [...prevErr, error]);
    
          console.log(error);
        }
}