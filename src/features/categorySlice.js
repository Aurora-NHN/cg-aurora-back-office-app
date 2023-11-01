import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    createCategoryApi,
    createSubCategoryApi,
    deleteCategoryApi,
    getCategoryApi,
    getSubCategoryApi, updateCategoryApi
} from "~/api/categoryApi";
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
export const updateCategory = createAsyncThunk("updateCategory", async (arg, thunkAPI) => {
    const response = await updateCategoryApi(arg);
    if (response && response.status !== 200) {
        return thunkAPI.rejectWithValue(response.data.message)
    }
    return response.data.data;
})
export const deleteCategory = createAsyncThunk("deleteCategory", async (arg, thunkAPI) => {
    const response = await deleteCategoryApi(arg);
    if (response && response.status !== 200) {
        return thunkAPI.rejectWithValue(response.data.message)
    }
    return arg;
})

export const createSubCategory = createAsyncThunk("createSubCategory", async (arg, thunkAPI) => {
    const response = await createSubCategoryApi(arg);
    if (response && response.status !== 201) {
        return thunkAPI.rejectWithValue(response.data.message)
    }
    return response.data.data;
})
export const getSubCategories = createAsyncThunk("getSubCategory", async (arg, thunkAPI) => {
    const response = await getSubCategoryApi(arg);
    if (response && response.status !== 200) {
        return thunkAPI.rejectWithValue(response.data.message)
    }
    return response.data.data;
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        subCategoryPage: {},
        createCategorySuccess: false,
        getCategoriesSuccess: false,
        getSubCategoriesSuccess: false,
        createCategoryError: null
    },
    extraReducers: builder => {
        builder
            .addCase(createCategory.pending, (state) => {
                state.createCategorySuccess = false;
                toast('Submitting...', {type: "info", isLoading: true, toastId: 'categorySubmitting'})
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.createCategorySuccess = true;
                state.categories.unshift(action.payload);
                toast.dismiss('categorySubmitting')
                toast('Submitted! id: ' + action.payload.id, {type: "success"})
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.createCategorySuccess = false;
                toast.dismiss('categorySubmitting')
                toast(action.payload, {type: "error"})
            })

            .addCase(getCategories.pending, (state) => {
                state.getCategoriesSuccess = false;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.getCategoriesSuccess = true;
                state.categories = action.payload
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.getCategoriesSuccess = false;
                toast(action.payload, {type: "error"})
            })

            .addCase(updateCategory.pending, (state) => {
                toast('Updating...', {type: "info", isLoading: true, toastId: 'categoryUpdating'})
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.createCategorySuccess = true;
                state.categories = state.categories.filter(category => +category.id !== +action.payload.id)
                state.categories.unshift(action.payload);
                toast.dismiss('categoryUpdating')
                toast('Submitted! id: ' + action.payload.id, {type: "success"})
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.createCategorySuccess = false;
                toast.dismiss('categoryUpdating')
                toast(action.payload, {type: "error"})
            })

            .addCase(deleteCategory.pending, (state) => {
                toast("Deleting...", {type: "info", isLoading: true, toastId: 'deleteCategory'})
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                const deletedId = action.payload;
                state.categories = state.categories
                    .filter(category => category.id !== deletedId);
                toast.dismiss('deleteCategory')
                toast("Deleted!", {type: "success"})
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                toast.dismiss('deleteCategory')
                toast(action.payload, {type: "error"})
            })

            .addCase(createSubCategory.pending, (state) => {
                toast('Submitting...', {type: "info", isLoading: true, toastId: 'subCategorySubmitting'})
            })
            .addCase(createSubCategory.fulfilled, (state, action) => {
                state.subCategoryPage.content.unshift(action.payload);
                toast.dismiss('subCategorySubmitting')
                toast('Sub-category submitted: ' + action.payload.name, {type: "success"})
            })
            .addCase(createSubCategory.rejected, (state, action) => {
                toast.dismiss('subCategorySubmitting')
                toast(action.payload, {type: "error"})
            })

            .addCase(getSubCategories.pending, (state) => {
                state.getSubCategoriesSuccess = false;
            })
            .addCase(getSubCategories.fulfilled, (state, action) => {
                state.getSubCategoriesSuccess = true;
                state.subCategoryPage = action.payload
            })
            .addCase(getSubCategories.rejected, (state, action) => {
                state.getSubCategoriesSuccess = false;
                toast(action.payload, {type: "error"})
            })
    }
})

export const selectCategories = state => state.category.categories;
export const selectSubCategoryPage = state => state.category.subCategoryPage;
export const selectGetCategoriesSuccess = state => state.category.getCategoriesSuccess;
export const selectGetSubCategoriesSuccess = state => state.category.getSubCategoriesSuccess;

export default categorySlice