import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviewsService from "./reviewsService";

const initialState = {
    reviews: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const addReview = createAsyncThunk(
    'reviews/addReview',
    async (data, thunkAPI) => {
        try {
            return await reviewsService.addReview(data);
        }
        catch(error) {
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message
                || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getUserReviews = createAsyncThunk(
    'reviews/getUserReviews',
    async (userId, thunkAPI) => {
        try {
            return await reviewsService.getUserReviews(userId);
        }
        catch(error) {
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message
                || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getBookReviews = createAsyncThunk(
    'reviews/getBookReviews',
    async (bookId, thunkAPI) => {
        try {
            return await reviewsService.getBookReviews(bookId);
        }
        catch(error) {
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message
                || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addReview.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        })
        .addCase(addReview.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
        })
        .addCase(addReview.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.isSuccess = false;
        })
        .addCase(getUserReviews.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        })
        .addCase(getUserReviews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
            state.reviews = action.payload;
        })
        .addCase(getUserReviews.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.isSuccess = false;
        })
        .addCase(getBookReviews.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        })
        .addCase(getBookReviews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
            console.log(action.payload);
            state.reviews = action.payload;
        })
        .addCase(getBookReviews.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.isSuccess = false;
        });
    }
});

export default reviewsSlice.reducer;