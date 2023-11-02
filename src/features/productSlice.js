import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createProductApi, getProductApi} from "~/api/productApi";
import {toast} from "react-toastify";

export const getProducts = createAsyncThunk(
    "getProduct",
    async (arg, thunkAPI) => {
    const response = await getProductApi(arg);
    if (response && response.status !== 200) {
        return thunkAPI.rejectWithValue(response.data.message)
    }
    return response.data;
});

export const createProduct = createAsyncThunk(
    "createNewProduct",
    async (formData, thunkAPI) => {
    const response = await createProductApi(formData);

    if (response && response.status !== 200) {
        return thunkAPI.rejectWithValue(response.status)
    }

    return response.data;
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        values: [],
        value: {},
        pages: {},
        productAdded: {},
        getProductsSuccess: false,
        createProductSuccess: false,
        createProductError: null,
        productDetail: {},
        getProductDetailSuccess: false
    },
    reducers: {
        setProductDetail: (state, action) => {
            state.productDetail = action.payload
        },
        setGetProductDetailSuccess: (state, action) => {
            state.getProductDetailSuccess = action.payload;
        }
    },

    extraReducers: builder =>{
        builder
            .addCase(getProducts.pending, (state) => {
                state.getProductsSuccess = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.getProductsSuccess = true;
                state.pages = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.getProductsSuccess = false;
                toast(action.payload, {type: "error"})
            })
            //Add Product
            .addCase(createProduct.pending, (state) => {
                state.createProductSuccess = false;
                toast('Submitting...', {type: "info", isLoading: true, toastId: 'Product Submitting'})
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.createProductSuccess = true;
                state.productAdded = action.payload;
                // state.values.unshift(action.payload);
                toast.dismiss('Product Submitting')
                toast('Submitted! id: ' + action.payload.id, {type: "success"})
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.createProductSuccess = false;
                toast.dismiss('Product Submitting')
                toast(action.payload, {type: "error"})
            })

    }
})

export const {
    setGetProductDetailSuccess,
    setProductDetail
} = productSlice.actions;

export const selectProductDetail = state => state.product.productDetail;

export const selectGetProductDetailSuccess  = state => state.product.getProductDetailSuccess;

export const selectProducts = state => state.product.pages;
export const selectGetProductsSuccess = state => state.product.getProductsSuccess;
export const selectCreateProductSuccess = state => state.product.createProductSuccess;
export const selectCreateProduct = state => state.product.productAdded;