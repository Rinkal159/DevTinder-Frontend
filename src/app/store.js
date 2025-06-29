import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import feedReducer from "../features/feed/feedSlice";
import sendReqReducer from "../features/sendReq/sendRequestSlice"
import receivedReqReducer from "../features/receivedReq/receivedReq"
import connectionsReducer from "../features/connections/connectionsSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        feed : feedReducer,
        sendReq : sendReqReducer,
        receivedReq : receivedReqReducer,
        connections : connectionsReducer
    }
});