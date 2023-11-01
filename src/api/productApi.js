import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const getProductApi = async (pageable={}) =>{
    const token = localStorage.getItem('token')
    try {
        const page = pageable.page?`page=${pageable.page}`:'';
        const size = pageable.size?`size=${pageable.size}`:'';
        return await axios.get(
            `${AURORA_API}/admin/products?${page}&${size}`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );
    } catch (e) {
        console.log("Get products error!", e)
        return e.response;
    }
}

export const createProductApi = async (body) => {
    const token = localStorage.getItem('token')
    try {
        return await axios.post(
            `${AURORA_API}/admin/products`,
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


