import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const getUserPage = async ({page, size, username}) => {
    let token = localStorage.getItem("token");
    let result = null;
    try {
        result =  await axios.get(
            `${AURORA_API}/admin/users?page=${page}&size=${size}&username=${username}`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }

        );

    } catch (e) {
        return e.response
    }
    return result;
}
export const register = async (data) => {
    let result = null;
    let token = localStorage.getItem("token");
    try {
        result =  await axios.post(
            `${AURORA_API}/register-user`,data,{
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        );

    } catch (e) {
        return e.response
    }
    return result;
}

export const changeRole = async (username) => {
    let token = localStorage.getItem("token");
    try {
        return await axios.get(
            `${AURORA_API}/admin/change-role?username=${username}` , {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        );
    } catch (e) {
        return e.response
    }
}

export const deleteUser = async (username) => {
    let token = localStorage.getItem("token");
    try {
        return await axios.get(
            `${AURORA_API}/admin/delete?username=${username}` , {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        );
    } catch (e) {
        return e.response
    }
}
