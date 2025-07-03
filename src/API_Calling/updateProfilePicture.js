import axios from "axios";
import { addUser } from "../features/user/userSlice";

export default async function updateProfilePicture(token, formData, setLoad, setPass, setImg, setPreviewImg, dispatch, setErr) {
    try {
        setLoad(true);

        const res = await axios.post("http://localhost:3002/profile/update/picture",
            formData,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }
        )

        console.log('user : ', res.data);


        if (res.data) {
            dispatch(addUser(res.data));
            setImg("");
            setPreviewImg(res.data.img);
            setLoad(false);
            setPass(true);
        }

    } catch (err) {
        setLoad(false);
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error])
    }
}