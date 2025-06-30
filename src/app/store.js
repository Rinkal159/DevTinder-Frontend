import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import feedReducer from "../features/feed/feedSlice";
import sendReqReducer from "../features/sendReq/sendRequestSlice"
import receivedReqReducer from "../features/receivedReq/receivedReq"
import connectionsReducer from "../features/connections/connectionsSlice"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    user: userReducer,
    feed: feedReducer,
    sendReq: sendReqReducer,
    receivedReq: receivedReqReducer,
    connections: connectionsReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persister = persistStore(store);