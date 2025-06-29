import axios from "axios";
import { addFeed } from "../features/feed/feedSlice";

export default async function getMyFeed(dispatch, setLoad, setErr) {
    try {
        if(setLoad) setLoad(true);

        const res = await axios.get("http://localhost:3002/user/feed", {
            withCredentials: true,
        });

        dispatch(addFeed(res.data.data));

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
        
    } finally {
        if(setLoad) setLoad(false);
    }
}