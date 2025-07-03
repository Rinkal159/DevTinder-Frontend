import axios from "axios";
import { addUser } from "../features/user/userSlice";

export default async function updateProfile(token, data,setLoad, setPass, setErr, dispatch) {
    try {
        setLoad(true);
        const res = await axios.post(
            "http://localhost:3002/profile/update",
            data,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            }
        );

        if (res.data) {
            dispatch(addUser(res.data));
            setLoad(false);
            setPass(true);
        }

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }
}
