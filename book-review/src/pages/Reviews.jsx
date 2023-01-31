import React from 'react'
import UserReviewList from '../components/UserReviewList'

const Reviews = () => {
	return (
		<>
            <section className='heading'>
                <h1>Reviews</h1>
                <p>Your reviews</p>
            </section>
            <section>
				<UserReviewList/>
            </section>
        </>
	)
}

export default Reviews