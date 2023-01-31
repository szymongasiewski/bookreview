import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "./booksService";

const initialState = {
    books: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async (searchTerm, thunkAPI) => {
        try {
            const data = await booksService.getBooks(searchTerm);
            console.log(data);
            const books = data.map((book) => {
                return {
                    id: book.key.replace('/works/', ''),
                    author: book.author_name,
                    cover_img: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
                    edition_count: book.edition_count,
                    first_publish_year: book.first_publish_year,
                    title: book.title
                }
            });

            if(books.length === 0) {
                return null;
            }

            return books;
        }
        catch (error) {
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message
                || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBooks.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
            state.books = null;
        })
        .addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
            state.books = action.payload;
        })
        .addCase(getBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
            state.books = null;
        });
    }
});

export default booksSlice.reducer;