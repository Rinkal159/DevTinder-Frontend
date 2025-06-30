import { useSelector } from "react-redux"

export default function ProfileInfo({field, value}) {
    const user = useSelector((state) => state.user);
    return (
        <div className="w-full flex flex-col gap-y-1" >
            <h1 className="font-medium text-lg">{field}</h1>
            <p className="border px-2 py-1.5 w-full bg-gray-300 cursor-default">{user[value]}</p>
        </div>
    )
}