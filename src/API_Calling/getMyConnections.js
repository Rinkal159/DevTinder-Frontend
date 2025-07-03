import axios from "axios";
import { addConnections } from "../features/connections/connectionsSlice";

export default async function getMyConnections(token, dispatch, setErr) {
    try {
        const res = await axios.get("http://localhost:3002/user/connections", {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (res.data) {
            res.data.forEach((r) => {
                dispatch(addConnections(r));
            });
        }

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }
}