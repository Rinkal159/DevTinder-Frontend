import axios from "axios";
import { addFeed } from "../features/feed/feedSlice";

export default async function getMyFeed(token, dispatch, setLoad, setErr) {
    try {
        
        if (setLoad) setLoad(false);

        const res = await axios.get("http://localhost:3002/user/feed", {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        dispatch(addFeed(res.data.data));

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);

    } finally {
        if (setLoad) setLoad(false);
    }
}