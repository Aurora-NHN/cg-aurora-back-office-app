import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const login = async (data) => {
    try {
        return await axios.post(
            `${AURORA_API}/admin/login`, data     
        );
    } catch (e) {
        return e.response
    }
}

export const logout = async (token) => {
    let result = null;
    try {
        result = await axios.post(
            `${AURORA_API}/logout`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
    } catch (e) {
        result = e.response;
        console.log(e);
    }
    return result;
};