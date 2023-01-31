import React from 'react'
import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getBookDetails } from '../features/books/bookSlice';
import Spinner from './Spinner';
import "./BookDetails.css";
import BookReviewList from './BookReviewList';

const BookDetails = () => {
	const {id} = useParams();

	
	const book = useSelector((state) => state.book);
	
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getBookDetails(id));
	}, [id, dispatch]);

	if(book.isLoading) {
		return <Spinner/>;
	}

	return (
		<>
			<section className='book-details'>
				<div className='container'>
					<button type='button' className='flex flex-c btn btn-block' onClick={() => navigate(-1)}>
						<FaArrowLeft size = {22} />
						<span className='fs-18 fw-6'>Go Back</span>
					</button>

					<div className='book-details-content grid'>
						<div className='book-details-img'>
							<img src = {book.book?.cover_img} alt = "cover img" />
						</div>
						<div className='book-details-info'>
							<div className='book-details-item title'>
								<span className='fw-6 fs-24'>{book.book?.title}</span>
							</div>
							<div className='book-details-item description'>
								<span>{book.book?.description}</span>
							</div>
							<div className='book-details-item'>
								<span className='fw-6'>Subject Places: </span>
								<span className='text-italic'>{book.book?.subject_places}</span>
							</div>
							<div className='book-details-item'>
								<span className='fw-6'>Subject Times: </span>
								<span className='text-italic'>{book.book?.subject_times}</span>
							</div>
							<div className='book-details-item'>
								<span className='fw-6'>Subjects: </span>
							<span>{book.book?.subjects}</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<BookReviewList book={id}/>
			</section>
		</>
	)
}

export default BookDetails