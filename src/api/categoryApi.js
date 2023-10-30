import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const createCategoryApi = async (body) => {
    // const token = localStorage.getItem('token')
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTE0MDQ5Mzg4MzU1NDkxNTY2Nzc1IiwiaWF0IjoxNjk4NjAwOTg2LCJleHAiOjE2OTg2ODczODZ9.shx7rgbEilKJsb2LtQ7SJvryY2LL_GLEfaykq5LtASFvf88ANTOnp3vlWe-x4Zwb11RRILH2YWY1Z0tTSRiXcw'
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
        console.log("Create categories error", e)
        return e.response;
    }
}

export const getCategoryApi = async () =>{
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTE0MDQ5Mzg4MzU1NDkxNTY2Nzc1IiwiaWF0IjoxNjk4NjAwOTg2LCJleHAiOjE2OTg2ODczODZ9.shx7rgbEilKJsb2LtQ7SJvryY2LL_GLEfaykq5LtASFvf88ANTOnp3vlWe-x4Zwb11RRILH2YWY1Z0tTSRiXcw'
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
        console.log("Get categories error", e)
        return e.response;
    }
}