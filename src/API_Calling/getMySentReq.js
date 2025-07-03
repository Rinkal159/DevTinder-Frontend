import axios from "axios";
import { addSendReq } from "../features/sendReq/sendRequestSlice";

export default async function getMySentReq(token, dispatch, setErr) {
    try {
        const reqs = await axios.get("http://localhost:3002/user/sentRequests", {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const allReqs = reqs.data;

        if (allReqs) {

            allReqs.forEach((req) => {
                dispatch(addSendReq(req));
            });
        }

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }
}