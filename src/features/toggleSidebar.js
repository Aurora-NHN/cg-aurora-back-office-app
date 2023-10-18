import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sidebarExpand: false,
    sidebarActive:false
}
export const sidebarSlice = createSlice(
    {
        name: 'sidebar',
        initialState,
        reducers:{
            toggle: (state) => {
                state.sidebarExpand = !state.sidebarExpand;
            },
            activeSidebar: (state)=>{
                state.sidebarActive = !state.sidebarActive;
            }
        }

    }
);
export const {toggle, activeSidebar} = sidebarSlice.actions;
export const selectSidebarPosition = state => state.sidebar.sidebarExpand;
export const selectSidebarActive = state => state.sidebar.sidebarActive;
export default sidebarSlice