import axios from "axios";
import { addSendReqProfile, removeSentReq } from "../features/sendReq/sendRequestSlice";

export default async function deletReq(token,status, user, dispatch, navigate, setErr) {
    try {
        

        const res = await axios.delete(`http://localhost:3002/request/${status}/${user}`,
            { withCredentials: true,
                headers : {
                Authorization : `Bearer ${token}`
              }
             }
        );

        dispatch(removeSentReq(user));
        dispatch(addSendReqProfile(null))
        navigate("/feed")

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error])
    }
}