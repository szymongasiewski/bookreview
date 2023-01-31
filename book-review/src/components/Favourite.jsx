import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToFavourites, removeFavourite } from '../features/favourites/favouritesSlice';
import "./BookList.css";

const Favourite = (item) => {
    const dispatch = useDispatch();
    
    const removeOnSubmit = (e) => {
        e.preventDefault();

        dispatch(removeFavourite(item.id));
    }

  	return (
    	<div className='book-item flex flex-column flex-sb'>
			<div className='book-item-img'>
				<img src = {item.book.cover_img} alt = "cover" />
			</div>
			<div className='book-item-info text-center'>
				<Link to = {`/${item.book.id}`}>
					<div className='book-item-info-item title fw-7 fs-18'>
						<span>{item.book.title}</span>
					</div>
				</Link>

				<div className='book-item-info-item author fs-15'>
					<span className='text-capitalize fw-7'>Author: </span>
					<span>{item.book.author === undefined ? 'No author' : item.book.author.join(', ')}</span>
				</div>

				<div className='book-item-info-item edition-count fs-15'>
					<span className='text-capitalize fw-7'>Total Editions: </span>
					<span>{item.book.edition_count}</span>
				</div>

				<div className='book-item-info-item publish-year fs-15'>
					<span className='text-capitalize fw-7'>First Publish Year: </span>
					<span>{item.book.first_publish_year}</span>
				</div>
			</div>
			<div>
				<button type='submit' onClick={removeOnSubmit} className='btn btn-block'>Remove</button>
			</div>
		</div>
  	)
}

export default Favourite;