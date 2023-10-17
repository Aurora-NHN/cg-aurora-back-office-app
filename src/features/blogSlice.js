import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteBlogApi, findBlogs} from "~/api/blogApi";
import {toast} from "react-toastify";


export const getBlogs = createAsyncThunk("getBlogs", async () => {
    const response = await findBlogs();
    return response.data;
})

export const deleteBlog = createAsyncThunk("deleteBlog", async (id) => {
    const response = await deleteBlogApi(id)
    if (!response){
        return "Connection error!"
    }
    return response.status
})
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
        values: [],
        uploadImageLoading: false,
        getBlogsLoading: false,
        getBlogsError: null
    },
    reducers: {
        setBlog: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getBlogs.pending, (state) => {
                state.getBlogLoading = true;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.values = action.payload;
                state.getBlogLoading = false;
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.getBlogsError = action.payload
                state.getBlogLoading = false;
            })

            .addCase(deleteBlog.pending, (state) => {
                toast("Deleting...", {type: "info", isLoading: true, toastId: 97})
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                toast.dismiss(97)
                if (action.payload === 200){

                    toast("Delete success: " + action.payload,
                        {type: "info"})
                }else {
                    toast("Delete error: " + action.payload,
                        {type: "error"})
                }
            })
    }
});

export const {setBlog} = blogSlice.actions
export const selectBlog = state => state.blog.value
export const selectBlogs = state => state.blog.values
export const selectGetBlogLoading = state => state.blog.getBlogLoading
export default blogSlice