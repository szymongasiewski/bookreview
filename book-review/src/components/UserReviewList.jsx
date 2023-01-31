import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserReviews } from '../features/reviews/reviewsSlice';
import Spinner from './Spinner'
import "./BookList.css";
import UserReview from './UserReview';

const UserReviewList = () => {
    const reviews = useSelector((state) => state.reviews);
    const {user} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUserReviews(user.user.id));
    }, [dispatch, user]);

    if(reviews.isLoading) {
        return <Spinner/>
    }

    return (
        <section className='booklist'>
			<div className='container'>
				<div className='booklist-content'>
				{
					reviews.reviews.map((item, index) => {
					return (
						<UserReview key = {index} {...item} />
					)
					})
				}
				</div>
			</div>
		</section>
    )
}

export default UserReviewList