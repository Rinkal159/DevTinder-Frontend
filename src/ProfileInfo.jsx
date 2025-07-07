import { useSelector } from "react-redux"

export default function ProfileInfo({field, value}) {
    const user = useSelector((state) => state.user);
    return (
        <div className="w-full flex flex-col gap-y-1" >
            <h1 className="fieldName">{field}</h1>
            <p className="fieldValue">{user[value]}</p>
        </div>
    )
}