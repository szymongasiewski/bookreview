import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToFavourites } from '../features/favourites/favouritesSlice';
import "./BookList.css";

const Book = (book) => {
	const {user} = useSelector((state) => state.auth);
	const favourite = useSelector((state) => state.favourites)

	const [isFavourite, setIsFavourite] = useState(!favourite.items.some(el => el.book.id === book.id));

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const favouriteOnSubmit = (e) => {
		e.preventDefault();
		
		const data = {
			userId: user.user.id,
			book: book
		}
		
		setIsFavourite(favourite.items.some(el => el.book.id === book.id));
		dispatch(addToFavourites(data));
	}

	const goToReview = () => {
		navigate('/review', {state:{title: book.title, year: book.first_publish_year, author: book.author, bookId: book.id}});
	}

  	return (
    	<div className='book-item flex flex-column flex-sb'>
			<div className='book-item-img'>
				<img src = {book.cover_img} alt = "cover" />
			</div>
			<div className='book-item-info text-center'>
				<Link to = {`/${book.id}`}>
					<div className='book-item-info-item title fw-7 fs-18'>
						<span>{book.title}</span>
					</div>
				</Link>

				<div className='book-item-info-item author fs-15'>
					<span className='text-capitalize fw-7'>Author: </span>
					<span>{book.author === undefined ? 'No author' : book.author.join(', ')}</span>
				</div>

				<div className='book-item-info-item edition-count fs-15'>
					<span className='text-capitalize fw-7'>Total Editions: </span>
					<span>{book.edition_count}</span>
				</div>

				<div className='book-item-info-item publish-year fs-15'>
					<span className='text-capitalize fw-7'>First Publish Year: </span>
					<span>{book.first_publish_year}</span>
				</div>
			</div>
			<div>
				{user && isFavourite &&
				<button type='submit' onClick={favouriteOnSubmit} className='btn btn-block'>Add to Favourites</button>}
				{user &&
				<button onClick={goToReview} className='btn btn-block'>Review</button>}
			</div>
		</div>
  	)
}

export default Book