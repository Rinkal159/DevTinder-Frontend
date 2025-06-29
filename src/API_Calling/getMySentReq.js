import axios from "axios";
import { addSendReq } from "../features/sendReq/sendRequestSlice";

export default async function getMySentReq(dispatch, setErr) {
    try {
        const reqs = await axios.get("http://localhost:3002/user/sentRequests", {
            withCredentials: true,
        });

        const allReqs = reqs.data;

        allReqs.forEach((req) => {
            dispatch(addSendReq(req));
        });

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }
}