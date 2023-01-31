import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookReviews } from '../features/reviews/reviewsSlice';
import BookReview from './BookReview';
import Spinner from './Spinner';

const BookReviewList = (book) => {
    const reviews = useSelector((state) => state.reviews);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBookReviews(book.book));
    }, [dispatch, book]);

    if(reviews.isLoading) {
        return <Spinner/>
    }

    return (
        <section className='booklist'>
			<div className='container'>
                <div className='section-title'>
					<h2>Reviews</h2>
				</div>
				<div className='booklist-content'>
				{
					reviews.reviews.map((item, index) => {
					return (
						<BookReview key = {index} {...item} />
					)
					})
				}
				</div>
			</div>
		</section>
    )
}

export default BookReviewList