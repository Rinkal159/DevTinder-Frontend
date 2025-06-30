import axios from "axios";
import { addUser } from "../features/user/userSlice";

export default async function chnageMyPassword(data, setPass, setErr, dispatch) {
    console.log(setPass);
    
    try {
        const res = await axios.post(
            "http://localhost:3002/profile/password/update",
            data,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (res.data) {
            setPass(true);

            dispatch(addUser(res.data));

        }
        
    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }



}
