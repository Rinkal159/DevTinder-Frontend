import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser : (state, action)=> {
            return action.payload;
        },
        // logoutUser : (state, action) => {
        //     return null;
        // },
        deleteUser : (state, action)=> {
            return null;
        }
    }
})

export const {addUser, deleteUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;