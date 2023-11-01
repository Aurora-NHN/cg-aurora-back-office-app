import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {changeRoleAdmin, changeRoleUser, getUserPage, register} from "~/api/userApi";

const initialState = {
    values: [],
    errorOfGetAll: null,
    successOfGetAll: false,
    errorOfRegister: null,
    successOfRegister: false,
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
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.successOfRegister = true;
                state.errorOfRegister = false;
            });
    },
});

export const {
    setGetAllError,
    setGetAllSuccess,
    setErrorOfRegister,
    setSuccessOfRegister,
    setValues
} = userSlice.actions;

export const selectErrorOfRegister = (state) => state.user.errorOfRegister;
export const selectSuccessOfRegister = (state) => state.user.successOfRegister;
export const selectUserList = (state) => state.user.values;
export const selectTotalPages = (state) => state.user.totalPages;
export const selectTotalElements = (state) => state.user.totalElements;
export default userSlice;
