import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bunch : [],
    individual : []
}

export const receivedReqSlice = createSlice({
    name : "receivedReq",
    initialState,
    reducers : {

        // add all requests to bunch from axios res
        addReceivedReq : (state, action) => {
            const {_id} = action.payload;
            const existedReq = state.bunch?.some((user) => user._id === _id);

            if(!existedReq) {
                state.bunch.push(action.payload);
            }
        },

        // remove user from bunch after accepting or rejecting the requests
        removeReq : (state, action) => {
            if(!state) return state;
            state.bunch = state.bunch.filter((state) => state._id !== action.payload)
        },

        // clear bunch and make it 'empty' (not null) after user is logging out.
        setReceivedReqEmpty : (state, action) => {
            state.bunch = action.payload;
            
        },

        //add the profile of user in individual state when the user clicks on the name of the user
        addReceivedReqProfile : (state, action) => {
            state.individual = action.payload;
        }
    }

})

export const {addReceivedReq, removeReq, setReceivedReqEmpty, addReceivedReqProfile} = receivedReqSlice.actions
export default receivedReqSlice.reducer;

