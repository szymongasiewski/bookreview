import React from 'react'
import BookList from '../components/BookList';
import SearchForm from '../components/SearchForm';

const Home = () => {
    return (
        <>
            <section className='heading'>
                <h1>Home</h1>
                <p>Find your favourite books</p>
                <SearchForm/>
            </section>
            <section>
                <BookList/>
            </section>
        </>
    );
}

export default Home