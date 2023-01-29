import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { getBooks } from '../features/books/booksSlice';

const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(getBooks(searchTerm));
	}

    return (
        <div className='form-search'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input onChange={(event) => setSearchTerm(event.target.value)} type='text' className='form-control' id='search' name='search' placeholder="Search for your favourite books" />
                    <button className='btn btn-search' type='submit'>
                        <FaSearch size={20}/> Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm