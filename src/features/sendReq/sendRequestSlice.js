import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bunch: [],
    individual: []
}

export const sendReqSlice = createSlice({
    name: "sendReq",
    initialState,
    reducers: {

        // add all requests to bunch from axios res
        addSendReq: (state, action) => {
            // push the new user (push action.payload), not override(return action.payload)

            const { _id } = action.payload;

            const existedUsers = state.bunch?.some((user) => user._id === _id); //'some' method return false if condition never satisfied, but when condition satisfies, it return true and stops iterating, true means there is duplicated users ditacted so in the if condition true becomes false thus the block will never execute and new user won't push in the array of state beacuse it is already there(duplicated)

            if (!existedUsers) {
                state.bunch.push(action.payload);
            }
        },

        // clear bunch and make it 'empty' (not null) after user is logging out.
        setSendReqStateEmpty: (state, action) => {
            state.bunch = action.payload;
        },

        //add the profile of user in individual state when the user clicks on the name of the user
        addSendReqProfile: (state, action) => {
            state.individual = action.payload;
        },

        removeSentReq : (state, action) => {
            state.bunch = state.bunch.filter((state) => state._id !== action.payload)
        }
    }
})

export const { addSendReq, setSendReqStateEmpty, addSendReqProfile, removeSentReq } = sendReqSlice.actions;
export default sendReqSlice.reducer;

