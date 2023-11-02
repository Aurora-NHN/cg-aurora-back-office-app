import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const createCategoryApi = async (body) => {
    const token = localStorage.getItem('token')
    try {
        return await axios.post(
            `${AURORA_API}/admin/categories`,
            body,
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                }
            }
        );
    } catch (e) {
        console.log("Create categories error!", e)
        return e.response;
    }
}

export const getCategoryApi = async () =>{
    const token = localStorage.getItem('token')
    try {
        return await axios.get(
            `${AURORA_API}/admin/categories`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );
    } catch (e) {
        console.log("Create categories error!", e)
        return e.response;
    }
}

export const updateCategoryApi = async (data) =>{
    const token = localStorage.getItem('token')
    try {
        return await axios.put(
            `${AURORA_API}/admin/categories`,
            data,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );
    } catch (e) {
        console.log("Update categories error!", e)
        return e.response;
    }
}

export const deleteCategoryApi = async (id) => {
    const token = localStorage.getItem('token')
    try {
        return await axios.delete(
            `${AURORA_API}/admin/categories/${id}`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );
    } catch (e) {
        console.log("Delete category error!", e)
        return e.response;
    }
}

export const getSubCategoryApi = async (pageable) =>{
    const token = localStorage.getItem('token')
    try {
        let url=`${AURORA_API}/admin/sub-categories?`
        if (pageable){
            if (pageable.page) url += `page=${pageable.page}&`
            if (pageable.size) url += `size=${pageable.size}`
        }
        return await axios.get(
            url,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );
    } catch (e) {
        console.log("Get sub-categories error!", e)
        return e.response;
    }
}

export const createSubCategoryApi = async (data) =>{
    const token = localStorage.getItem('token')
    try {
        return await axios.post(
            `${AURORA_API}/admin/sub-categories`,
            data,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );
    } catch (e) {
        console.log("Create categories error!", e)
        return e.response;
    }
}

export const getAllSubCategoryApi = async () =>{
    const token = localStorage.getItem('token')
    try {

        return await axios.get(
            `${AURORA_API}/admin/sub-categories/all`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );
    } catch (e) {
        console.log("Get sub-categories error!", e)
        return e.response;
    }
}