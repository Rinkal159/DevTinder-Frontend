import axios from "axios";
import { addReceivedReq } from "../features/receivedReq/receivedReq";

export default async function getMyReceivedReq(token, dispatch, setErr) {
    try {
        const reqs = await axios.get(
            "http://localhost:3002/user/receivedRequests",
            {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const allReqs = reqs.data;

        if (allReqs) {
            allReqs.forEach((req) => {
                dispatch(addReceivedReq(req));
            });
        }

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }
}