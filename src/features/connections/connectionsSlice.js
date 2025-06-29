import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bunch: []
}

export const connectionsSlice = createSlice({
    name: "connections",
    initialState,
    reducers: {
        addConnections: (state, action) => {
            const { _id } = action.payload;

            const existedConnections = state.bunch?.some((user) => user._id === _id);

            if (!existedConnections) {
                state.bunch.push(action.payload)
            }
        }
    }
});

export const {addConnections} = connectionsSlice.actions;
export default connectionsSlice.reducer;