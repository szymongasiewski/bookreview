import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm'

const Review = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<>
            <section className='heading'>
				<button type='button' className='btn' onClick={() => navigate(-1)}>
					<FaArrowLeft size = {22} />
					<span className='fs-18 fw-6'>Go Back</span>
				</button>
                <h1>Write your review</h1>
                <p>{location.state.title}</p>
				<p>{location.state.year}</p>
				<p>{location.state.author}</p>
            </section>
            <section>
				<ReviewForm {...location.state}/>
            </section>
        </>
	)
}

export default Review