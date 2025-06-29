import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
    name:"feed",
    initialState:[],
    reducers:{
        addFeed : (state, action) => {
            return action.payload;
        },
        removeFeed : (state, action) => {
            if(!state) return state;
            return state.filter((state) => state._id !== action.payload)
        }
    }
})

export const {addFeed, removeFeed} = feedSlice.actions;
export default feedSlice.reducer;
