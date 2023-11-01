import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const getAll = async () => {
    let token = localStorage.getItem("token");
    try {
        return await axios.get(
            `${AURORA_API}/admin/users`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }

        );
    } catch (e) {
        return e.response
    }
}

export const changeRoleAdmin = async (username) => {
    let token = localStorage.getItem("token");
    try {
        return await axios.get(
            `${AURORA_API}/admin/change-role-admin?username=${username}` , {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }

        );
    } catch (e) {
        return e.response
    }
}

export const changeRoleUser = async (username) => {
    let token = localStorage.getItem("token");
    try {
        return await axios.get(
            `${AURORA_API}/admin/change-role-user?username=${username}` , {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }

        );
    } catch (e) {
        return e.response
    }
}