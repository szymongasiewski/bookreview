import React, { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: formData.email,
            password: formData.password,
        }

        dispatch(login(userData));
    }

    useEffect(() => {
        if(auth.isError) {
            toast.error(auth.message);
        }

        if(auth.isSuccess || auth.user) {
            navigate('/');
        }
        dispatch(reset());
    }, [auth.user, auth.isError, auth.isSuccess, auth.message, navigate, dispatch]);

    if(auth.isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Login</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='email' name='email' value={formData.email} placeholder="Enter your email" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password' name='password' value={formData.password} placeholder="Enter your password" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;