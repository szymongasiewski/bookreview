import React from 'react'
import FavouritesList from '../components/FavouritesList'

const Favourites = () => {
	return (
		<>
            <section className='heading'>
                <h1>Favourites</h1>
                <p>Your favourite books</p>
            </section>
            <section>
				<FavouritesList/>
            </section>
        </>
	)
}

export default Favourites