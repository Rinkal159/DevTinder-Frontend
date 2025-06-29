import axios from "axios";
import { addReceivedReq } from "../features/receivedReq/receivedReq";

export default async function getMyReceivedReq(dispatch, setErr) {
    try {
        const reqs = await axios.get(
            "http://localhost:3002/user/receivedRequests",
            {
                withCredentials: true,
            }
        );

        const allReqs = reqs.data.data;

        allReqs.forEach((req) => {
            dispatch(addReceivedReq(req));
        });
    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }
}