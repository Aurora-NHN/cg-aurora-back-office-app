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
        console.log("Get categories error!", e)
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