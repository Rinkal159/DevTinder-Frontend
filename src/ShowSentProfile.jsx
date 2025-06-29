import { useSelector } from "react-redux";
import ShowFeed from "./ShowFeed";


export default function ShowSentProfile() {

    const user = useSelector((state) => state.sendReq);

    return (
        <div>
            <ShowFeed
                feedUsers={user.individual}
                
                
            />
        </div>
    )
}