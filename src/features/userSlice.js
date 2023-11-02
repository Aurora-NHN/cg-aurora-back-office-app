import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {changeRole, changeRoleAdmin, changeRoleUser, deleteUser, getUserPage, register} from "~/api/userApi";
import {toast} from "react-toastify";

const initialState = {
    values: [],
    errorOfGetAll: null,
    successOfGetAll: false,
    errorOfRegister: null,
    successOfRegister: false,
    errorOfChangeRole: null,
    successOfChangeRole: false,
    errorOfDelete: null,
    successOfDelete: false,
    totalPages: null,
    totalElements: null,
};

export const getAllUserPage = createAsyncThunk(
    "",
    async ({page,size,username}, {rejectWithValue}) => {
        const response = await getUserPage({page,size,username});
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }

        return response.data;
    }
);

export const registerUser = createAsyncThunk(
    "/register",
    async (data, {rejectWithValue}) => {
        const response = await register(data);
        if (response.status !== 201) {
            return rejectWithValue(response.data.message);
        }

        return response.data;
    }
);

export const changeRoles = createAsyncThunk(
    "/change-role",
    async (username, {rejectWithValue}) => {
        const response = await changeRole(username);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }

        return response.data;
    }
);

export const deleteUsers = createAsyncThunk(
    "/delete",
    async (username, {rejectWithValue}) => {
        const response = await deleteUser(username);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }

        return response.data;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setGetAllError: (state, action) => {
            state.errorOfGetAll = action.payload;
        },
        setGetAllSuccess: (state, action) => {
            state.successOfGetAll = action.payload;
        },
        setErrorOfRegister: (state, action) => {
            state.errorOfRegister = action.payload;
        },
        setSuccessOfRegister: (state, action) => {
            state.successOfRegister = action.payload;
        },
        setChangeRoleError: (state, action) => {
            state.errorOfChangeRole = action.payload;
        },
        setChangeRoleSuccess: (state, action) => {
            state.successOfChangeRole = action.payload;
        },
        setErrorOfDelete: (state, action) => {
            state.errorOfDelete = action.payload;
        },
        setSuccessOfDelete: (state, action) => {
            state.successOfDelete = action.payload;
        },
        setValues:(state,action)=>{
            state.values = action.payload.content
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUserPage.rejected, (state, action) => {
                state.successOfGetAll = false;
                state.errorOfGetAll = action.payload;
            })
            .addCase(getAllUserPage.fulfilled, (state, action) => {
                state.successOfGetAll = true;
                state.values = action.payload.content;
                state.errorOfGetAll = false;
                state.totalPages = action.payload.totalPages;
                state.totalElements = action.payload.totalElements;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.successOfRegister = false;
                state.errorOfRegister = action.payload;
                toast.error(action.payload);
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.successOfRegister = true;
                state.errorOfRegister = false;
                toast.success("Register Success !" );
            })
            .addCase(changeRoles.rejected, (state, action) => {
                state.successOfChangeRole = false;
                state.errorOfChangeRole = action.payload;
                toast.error("Change Role Error !" );
            })
            .addCase(changeRoles.fulfilled, (state, action) => {
                state.successOfChangeRole = true;
                state.errorOfChangeRole = false;
                toast.success("Change Role Success !" );
            })
            .addCase(deleteUsers.rejected, (state, action) => {
                state.successOfDelete = false;
                state.errorOfDelete = action.payload;
                toast.error("Delete error !" );
            })
            .addCase(deleteUsers.fulfilled, (state, action) => {
                state.successOfDelete = true;
                state.errorOfDelete = false;
                toast.success("Delete Success !" );
            });
    },
});

export const {
    setGetAllError,
    setGetAllSuccess,
    setErrorOfRegister,
    setSuccessOfRegister,
    setChangeRoleError,
    setChangeRoleSuccess,
    setErrorOfDelete,
    setSuccessOfDelete,
    setValues
} = userSlice.actions;

export const selectErrorOfRegister = (state) => state.user.errorOfRegister;
export const selectSuccessOfRegister = (state) => state.user.successOfRegister;
export const selectErrorOfChangeRole = (state) => state.user.errorOfChangeRole;
export const selectSuccessOfChangeRole = (state) => state.user.successOfChangeRole;
export const selectErrorOfDelete = (state) => state.user.errorOfDelete;
export const selectSuccessOfDelete = (state) => state.user.successOfDelete;
export const selectUserList = (state) => state.user.values;
export const selectTotalPages = (state) => state.user.totalPages;
export const selectTotalElements = (state) => state.user.totalElements;
export default userSlice;
