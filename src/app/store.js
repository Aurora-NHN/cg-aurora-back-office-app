import {configureStore} from '@reduxjs/toolkit';
import sidebarSlice from "~/features/toggleSidebar";
import blogSlice from "~/features/blogSlice";
import {loginSlice} from "~/features/loginSlice";

const  store = configureStore({
    reducer:{
        sidebar: sidebarSlice.reducer,
        blog: blogSlice.reducer,
        login: loginSlice.reducer,
    }
});
export default store;
