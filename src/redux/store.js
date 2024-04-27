import { configureStore } from "@reduxjs/toolkit";
import download from "./slices/download";

export default configureStore({
    reducer: { download }
})