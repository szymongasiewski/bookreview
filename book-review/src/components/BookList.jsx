import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './Spinner';
import "./BookList.css";
import Book from './Book';
import { useEffect } from 'react';
import { getFavourites } from '../features/favourites/favouritesSlice';

const BookList = () => {
	const books = useSelector((state) => state.books);
	const {user} = useSelector((state) => state.auth);
	
	const dispatch = useDispatch();

	useEffect(() => {
		if(user) {
			dispatch(getFavourites(user.user.id));
		}
	}, [dispatch, user]);
	
	if(books.isLoading) {
        return <Spinner/>
    }

	if(books.isError || books.books === null) {
		return (
			<section className='booklist'>
			<div className='container'>
				<div className='section-title'>
					<h2>No results</h2>
				</div>
				<div className='booklist-content grid'>
				</div>
			</div>
		</section>
		)
	}

    return (
		<section className='booklist'>
			<div className='container'>
				<div className='section-title'>
					<h2>Results</h2>
				</div>
				<div className='booklist-content grid'>
				{
					books.books.map((item, index) => {
					return (
						<Book key = {index} {...item} />
					)
					})
				}
				</div>
			</div>
		</section>
    )
}

export default BookList