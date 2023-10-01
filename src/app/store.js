import {configureStore} from '@reduxjs/toolkit';
import {sidebarSlice} from "~/features/toggle_sidebar"

const  store = configureStore({
    reducer:{
        sidebar: sidebarSlice.reducer,
    }
});
export default store;
