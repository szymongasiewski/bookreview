import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from './Spinner';
import "./BookList.css";
import Book from './Book';

const BookList = () => {
	const books = useSelector((state) => state.books);
	console.log(books);
	
	if(books.isLoading) {
        return <Spinner/>
    }

	if(books.isError || books.books === null) {
		return (
			<section className='booklist'>
			<div className='container'>
				<div className='section-title'>
					<h2>No results</h2>
				</div>
				<div className='booklist-content grid'>
				</div>
			</div>
		</section>
		)
	}

    return (
		<section className='booklist'>
			<div className='container'>
				<div className='section-title'>
					<h2>Results</h2>
				</div>
				<div className='booklist-content grid'>
				{
					books.books.map((item, index) => {
					return (
						<Book key = {index} {...item} />
					)
					})
				}
				</div>
			</div>
		</section>
    )
}

export default BookList