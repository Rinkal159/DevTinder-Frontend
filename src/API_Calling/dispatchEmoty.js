import { addUser } from "../features/user/userSlice";
import { addFeed } from "../features/feed/feedSlice";
import {
    setSendReqStateEmpty,
    addSendReqProfile,
} from "../features/sendReq/sendRequestSlice";
import {
    setReceivedReqEmpty,
    addReceivedReqProfile,
} from "../features/receivedReq/receivedReq";
import { setConnectionsEmpty } from "../features/connections/connectionsSlice";

export default function (dispatch) {
    dispatch(addUser(null));
    dispatch(addFeed(null));
    dispatch(setSendReqStateEmpty([]));
    dispatch(addSendReqProfile(null));
    dispatch(setReceivedReqEmpty([]));
    dispatch(addReceivedReqProfile(null));
    dispatch(setConnectionsEmpty([]));
}