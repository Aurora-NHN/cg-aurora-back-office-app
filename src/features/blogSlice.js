import {createSlice} from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        value: {
            title: 'New blog',
            author: '3 psychic lady',
            mainImage: null,
            publish: false,
            content: '',
        },
        uploadImageLoading: false
    },
    reducers:{
        setBlog: (state, action) => {
            state.value = action.payload
        },
        setUploadLoading: (state, action) => {
            state.uploadImageLoading = action.payload
        }
    }
});

export const {setBlog, setUploadLoading} = blogSlice.actions
export const selectBlog = state => state.blog.value
export default blogSlice