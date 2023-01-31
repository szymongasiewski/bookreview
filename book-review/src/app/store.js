import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import booksReducer from "../features/books/booksSlice";
import bookReducer from "../features/books/bookSlice";
import favouritesReducer from "../features/favourites/favouritesSlice";
import reviewsReducer from "../features/reviews/reviewsSlice";


export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer, 
        favourites: favouritesReducer, 
        books: booksReducer, 
        book: bookReducer,
        reviews: reviewsReducer})
});