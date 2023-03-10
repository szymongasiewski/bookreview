import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import favouritesService from "./favouritesService";

const initialState = {
    items: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const addToFavourites = createAsyncThunk(
    'favourites/addToFavourites',
    async (data, thunkAPI) => {
        try {
            return await favouritesService.addToFavourites(data);
        }
        catch(error) {
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message
                || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getFavourites = createAsyncThunk(
    'favourites/getFavourites',
    async (userId, thunkAPI) => {
        try {
            return await favouritesService.getFavourites(userId);
        }
        catch(error) {
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message
                || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const removeFavourite = createAsyncThunk(
    'favourites/removeFavourite',
    async (id, thunkAPI) => {
        try {
            await favouritesService.removeFavourite(id);
            return id;
        }
        catch(error) {
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message
                || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addToFavourites.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        })
        .addCase(addToFavourites.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
        })
        .addCase(addToFavourites.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.isSuccess = false;
        })
        .addCase(getFavourites.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        })
        .addCase(getFavourites.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
            state.items = action.payload;
        })
        .addCase(getFavourites.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.isSuccess = false;
        })
        .addCase(removeFavourite.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        })
        .addCase(removeFavourite.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
            state.items = state.items.filter((item) => item.id !== action.payload);
        })
        .addCase(removeFavourite.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.isSuccess = false;
        });
    }
});

export default favouritesSlice.reducer;