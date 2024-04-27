import { webAgent } from "@/helpers/web-agent";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const download = createAsyncThunk('download/media', async (data) => {
    try {
        const res = await webAgent.post('/api/download', data);
        const result = res.data;
        if (result && result.code === 1000) return result.data;
        return null
    } catch (ex) {
        return null
    }
});