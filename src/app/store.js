import {configureStore} from '@reduxjs/toolkit';
import sidebarSlice from "~/features/toggleSidebar";
import blogSlice from "~/features/blogSlice";
import loginSlice from "~/features/loginSlice";
import categorySlice from "~/features/categorySlice";
import {productSlice} from "~/features/productSlice";
import userSlice from "~/features/userSlice";

const  store = configureStore({
    reducer:{
        sidebar: sidebarSlice.reducer,
        blog: blogSlice.reducer,
        login: loginSlice.reducer,
        product: productSlice.reducer,
        category: categorySlice.reducer,
        user: userSlice.reducer,
    }
});
export default store;
