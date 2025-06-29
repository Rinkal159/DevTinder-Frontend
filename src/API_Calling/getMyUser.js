import axios from "axios";
import { addUser } from "../features/user/userSlice";

export default async function getMyUser(dispatch, setErr) {
    try {
        const user = await axios.get("http://localhost:3002/profile/view", {
            withCredentials: true,
        });

        alert(`${user.data.firstName}'s data is fetched`);

        dispatch(addUser(user.data));
        
    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }
}