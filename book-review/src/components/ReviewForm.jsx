import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addReview } from '../features/reviews/reviewsSlice';

const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ReviewForm = (book) => {
    const [formData, setFormData] = useState({
        reviewTitle: '',
        rate: 0,
        reviewBody: '',
    });

    const {user} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const review = {
            userId: user.user.id,
            userName: user.user.name,
            bookId: book.bookId,
            title: book.title,
            year: book.year,
            author: book.author,
            reviewTitle: formData.reviewTitle,
            rate: formData.rate,
            reviewBody: formData.reviewBody
        }
        console.log(book.id);

        toast.success('Thanks for your review');

        dispatch(addReview(review));
        navigate('/');
    }

    return (
        <>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <p>Review title</p>
                        <input type='text' className='form-control' id='reviewTitle' name='reviewTitle' value={formData.reviewTitle} placeholder="Enter your title" onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                        <p>Rate book</p>
                        <select id="rate" name='rate' value={formData.rate} onChange={onChange}>
                            {options.map((option, key) => {
                                return <option key={key} value={option}>{option}</option>
                            })}
                        </select>
                    </div>
                    <div className='form-group'>
                        <p>Your review</p>
                        <textarea className='form-control no-resize' id='reviewBody' name='reviewBody' value={formData.reviewBody} placeholder="Write your review" rows="10" onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default ReviewForm