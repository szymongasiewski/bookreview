import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "./booksService";

const initialState = {
    book: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getBookDetails = createAsyncThunk(
    'book/getBookDetails',
    async (bookId, thunkAPI) => {
        try {
            const data = await booksService.getBookDetails(bookId);
            console.log(data);
            
            const book = {
                description: data.description ? data.description.value : "No description found",
                title: data.title,
                cover_img: `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`,
                subject_places: data.subject_places ? data.subject_places.join(", ") : "No subject places found",
                subject_times : data.subject_times ? data.subject_times.join(", ") : "No subject times found",
                subjects: data.subjects ? data.subjects.join(", ") : "No subjects found"
            }
            console.log(book);

            return book;
        }
        catch (error) {
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message
                || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBookDetails.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
            state.book = null;
        })
        .addCase(getBookDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
            state.book = action.payload;
        })
        .addCase(getBookDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
            state.book = null;
        });
    }
});

export default bookSlice.reducer;