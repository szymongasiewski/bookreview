import React from 'react'
import { Link } from 'react-router-dom';
import "./BookList.css";

const UserReview = (review) => {
    return (
		<div className='book-item flex flex-column flex-sb'>
			<div className='book-item-info text-center'>
				<div className='book-item-info-item author fs-15'>
					<span className='text-capitalize fw-7'>Author: </span>
					<span>{review.author === undefined ? 'No author' : review.author.join(', ')}</span>
				</div>
				<Link to = {`/${review.bookId}`}>
					<div className='book-item-info-item title fw-7 fs-18'>
						<span>{review.title}</span>
					</div>
				</Link>
				<div className='book-item-info-item title fw-7 fs-18'>
					<span>{review.year}</span>
				</div>
				<div className='book-item-info-item title fw-7 fs-18'>
					<span>Review title: {review.reviewTitle}</span>
				</div>
				<div className='book-item-info-item title fw-7 fs-18'>
					<span>Rate: {review.rate}</span>
				</div>
				<div className='book-item-info-item title fw-7 fs-18'>
					<span>{review.reviewBody}</span>
				</div>
			</div>
			<div>
				<button type='submit' className='btn btn-block btn-delete'>Delete</button>
			</div>
		</div>
    )
}

export default UserReview