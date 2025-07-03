import axios from "axios";

export default async function deleteMyProfile(token,setRemove, setErr) {
    try {

        const res = await axios.delete("http://localhost:3002/profile/delete", {
            withCredentials: true,
            headers : {
                Authorization : `Bearer ${token}`
              }
        });

        setRemove(false);

    } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
    }
}