import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaBookOpen} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
    const {user} = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'> <FaBookOpen /> BOOKREVIEW</Link>
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {user && <>
                <li>
                    <Link to='/reviews'>Your Reviews</Link>
                </li>
                <li>
                    <Link to='/favourites'>Favourites</Link>
                </li> </>}
                {user ? (<>
                <li>
                    <Link to='/profile'>
                        <FaUser/> Profile
                    </Link>
                </li>
                <li>
                    <button className='btn' onClick={onLogout}>
                        <FaSignOutAlt/> Logout
                    </button>
                </li></>) : (<>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt/> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser/> Register
                    </Link>
                </li>
                </>)}
                
            </ul>
        </header>
    );
}

export default Header