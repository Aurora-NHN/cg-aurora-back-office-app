import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const createBlog = async (blog) => {
    try {
        return await axios.post(
            `${AURORA_API}/blogs`,
            blog,
            {
                headers: {
                    Authorization : "",
                    "Content-Type" : "multipart/form-data"
                }
            }
        );
    } catch (e) {
        return e.response
    }
}

export const findBlogs = async () => {
    try {
        return await axios.get(
            `${AURORA_API}/blogs`,
            {
                headers: {
                    Authorization : "",
                    "Content-Type" : "multipart/form-data"
                }
            }
        );
    }catch (e){
        console.log("Find blog error", e)
    }
}

export const updateBlog = async (blog) => {
    try {
        console.log("update blog: ",blog)
        return await axios.put(
            `${AURORA_API}/blogs`,
            blog,
            {
                headers: {
                    Authorization : "",
                    "Content-Type" : "multipart/form-data"
                }
            }
        );
    }catch (e){
        return e.response
    }
}

export const deleteBlogApi = async (id) => {
    try {
        return await axios.delete(
            `${AURORA_API}/blogs/${id}`,
            {
                headers: {
                    Authorization : "",
                    "Content-Type" : "multipart/form-data"
                }
            }
        );
    }catch (e){
        return e.response
    }
}

export const uploadImage = async (file) =>{
    try {
        return await axios.post(
            `${AURORA_API}/blogs/content-images`,
            file,
            {
                headers: {
                    Authorization: "",
                    "Content-Type": "multipart/form-data"
                }
            }
        )
    }catch (e){
        console.log("Upload image error!", e)
        return e.response
    }
}