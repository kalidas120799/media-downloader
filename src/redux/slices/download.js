import { createSlice } from "@reduxjs/toolkit";
import { download } from "../thunks/download";

const downloadSlice = createSlice({
    name: "download",
    initialState: {
        payload: {},
        isRequesting: false,
        source: null
    },
    reducers: {
        updatePayload: (state, action) => {
            state.payload = action.payload;
        },
        addSource: (state, action) => {
            state.source = action.payload;
        },
        removeSource: (state, action) => {
            state.source = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(download.fulfilled, (state, action) => {
            state.payload = action.payload ? action.payload : {};
            state.isRequesting = false
        }).addCase(download.pending, (state, action) => {
            state.isRequesting = true
        }).addCase(download.rejected, (state, action) => {
            state.isRequesting = false
        })
    }
});

export const { updatePayload, addSource, removeSource } = downloadSlice.actions;
export default downloadSlice.reducer;