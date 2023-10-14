import {configureStore} from '@reduxjs/toolkit';
import sidebarSlice from "~/features/toggleSidebar";
import blogSlice from "~/features/blogSlice";

const  store = configureStore({
    reducer:{
        sidebar: sidebarSlice.reducer,
        blog: blogSlice.reducer
    }
});
export default store;
