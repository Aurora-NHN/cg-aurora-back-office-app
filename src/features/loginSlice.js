import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, logout} from "~/api/loginApi";

const initialState = {
    value: null,
    loading: false,
    loginError: null,
    loginSuccess: false,
    logoutSuccess: false,
    token: null,
};

export const loginAdmin = createAsyncThunk(
    "login",
    async (loginData, {rejectWithValue}) => {
        const response = await login(loginData);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);

export const logoutAdmin = createAsyncThunk("logout", async (token) => {
    const response = await logout(token);
    return response.data;
});

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginError: (state, action) => {
            state.loginError = action.payload;
        },
        setLoginSuccess: (state, action) => {
            state.loginSuccess = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setLogoutSuccess: (state, action) => {
            state.logoutSuccess = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state) => {
                state.loginSuccess = false;
                state.loading = true;
                state.loginError = false;
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loginSuccess = false;
                state.loading = false;
                state.loginError = action.payload;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loginSuccess = true;
                state.loading = false;
                state.value = action.payload;
                state.loginError = false;
                localStorage.setItem("token", action.payload.data);
            })
            .addCase(logoutAdmin.fulfilled, (state, action) => {
                state.logoutSuccess = true;
                state.loading = false;
                state.value = action.payload;
                state.token = null;
                localStorage.removeItem("token");
            });
    },
});

export const { setLoginError,
    setLoginSuccess,
    setToken,
    setLogoutSuccess} =
    loginSlice.actions;

export const selectAuthIsError = (state) => state.login.loginError;
export const selectLoginSuccess = (state) => state.login.loginSuccess;
export const selectLogoutSuccess = (state) => state.login.logoutSuccess;
export const selectToken = (state) => state.login.token;

export default loginSlice;
