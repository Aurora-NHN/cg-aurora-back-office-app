import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createCategoryApi, getCategoryApi} from "~/api/categoryApi";
import {toast} from "react-toastify";

export const createCategory = createAsyncThunk("createCategory", async (arg, thunkAPI) => {
    const response = await createCategoryApi(arg);
    if (response && response.status !== 201) {
        return thunkAPI.rejectWithValue(response.data.message)
    }
    return response.data.data;
})

export const getCategories = createAsyncThunk("getCategory", async (arg, thunkAPI) => {
    const response = await getCategoryApi();
    if (response && response.status !== 200) {
        return thunkAPI.rejectWithValue(response.data.message)
    }
    return response.data.data;
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        values: [],
        createCategorySuccess: false,
        getCategoriesSuccess: false,
        createCategoryError: null
    },
    extraReducers: builder => {
        builder
            .addCase(createCategory.pending, (state) => {
                state.createCategorySuccess = false;
                toast('Submitting...', {type: "info", isLoading:true, toastId: 'categorySubmitting'})
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.createCategorySuccess = true;
                state.values.unshift(action.payload);
                toast.dismiss('categorySubmitting')
                toast('Submitted! id: ' + action.payload.id,{type:"success"})
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.createCategorySuccess = false;
                toast.dismiss('categorySubmitting')
                toast(action.payload,{type:"error"})
            })
            .addCase(getCategories.pending, (state) => {
                state.getCategoriesSuccess = false;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.getCategoriesSuccess = true;
                state.values = action.payload
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.getCategoriesSuccess = false;
                toast(action.payload,{type:"error"})
            })
    }
})

export const selectCategories = state => state.category.values;
export const selectGetCategoriesSuccess = state => state.category.getCategoriesSuccess;

export default categorySlice