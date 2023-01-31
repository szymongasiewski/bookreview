import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAcc, reset } from '../features/auth/authSlice';

const Profile = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onDelete = () => {
        const userId = auth.user.user.id;

        dispatch(deleteAcc(userId));
        dispatch(reset());
        navigate('/');
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser/> Profile
                </h1>
                <p>Edit your profile</p>
            </section>
            <section>
                <div>
                    <ul>
                        <li>Email: {auth.user.user.email}</li>
                        <li>Name: {auth.user.user.name}</li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <ul>
                        <li>
                            <button onClick={onDelete} className='btn btn-delete'>Delete account</button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Profile