import React from 'react'

const BookReview = (review) => {
    return (
        <div className='book-item flex flex-column flex-sb'>
			<div className='book-item-info text-center'>
				<div className='book-item-info-item author fs-15'>
					<span className='text-capitalize fw-7'>Reviewer: </span>
					<span>{review.userName}</span>
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
		</div>
    )
}

export default BookReview