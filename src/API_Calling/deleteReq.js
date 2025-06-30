import axios from "axios";
import { removeSentReq } from "../features/sendReq/sendRequestSlice";

export default async function deletReq(status, user, dispatch, navigate, setErr) {
    try {

        console.log(user._id);

        const res = await axios.delete(`http://localhost:3002/request/${status}/${user._id}`,
            { withCredentials: true }
        );

        console.log(res);

        alert(`${user.firstName} : ${status}`)

        dispatch(removeSentReq(user._id));
        navigate("/feed")

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error])
    }
}