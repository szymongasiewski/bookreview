import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../features/favourites/favouritesSlice';
import Book from './Book';
import "./BookList.css";
import Favourite from './Favourite';

const FavouritesList = () => {
    const {user} = useSelector((state) => state.auth);
    const favourites = useSelector((state) => state.favourites);
    const dispatch = useDispatch();

	//console.log(favourites);

    useEffect(() => {
        dispatch(getFavourites(user.user.id));
    }, [dispatch, user]);

    return (
        <section className='booklist'>
			<div className='container'>
				<div className='booklist-content grid'>
				{
					favourites.items.map((item, index) => {
					return (
						<Favourite key = {index} {...item} />
					)
					})
				}
				</div>
			</div>
		</section>
    )
}

export default FavouritesList