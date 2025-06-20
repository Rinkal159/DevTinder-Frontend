import { useSelector } from "react-redux";


export default function Dashboard() {
    const state = useSelector((state) => state.user)
    
    return (
        <>
        <ul>
            {
                state.value.map((user, index) => (
                    <li key={index}>
                        {user.firstName}
                    </li>
                ))
            }
        </ul>
        </>
    )
}