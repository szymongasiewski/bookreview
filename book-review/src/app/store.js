import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import booksReducer from "../features/books/booksSlice";

export const store = configureStore({
    reducer: combineReducers({auth: authReducer, books: booksReducer})
});