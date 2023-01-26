import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
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

    useEffect(() => {
        if(auth.isError) {
            toast.error(auth.message);
        }

        if(auth.isSuccess || auth.user) {
            navigate('/');
        }
        dispatch(reset());
    }, [auth.user, auth.isError, auth.isSuccess, auth.message, navigate, dispatch]);

    const onSubmit = (e) => {
        e.preventDefault();

        if(formData.password !== formData.password2) {
            toast.error('Passwords don\'t match');
        }
        else {
            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            }

            dispatch(register(userData));
        }
    }

    if(auth.isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser/> Register
                </h1>
                <p>Create an account</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='name' name='name' value={formData.name} placeholder="Enter your name" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='email' name='email' value={formData.email} placeholder="Enter your email" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password' name='password' value={formData.password} placeholder="Enter your password" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password2' name='password2' value={formData.password2} placeholder="Confirm your password" onChange={onChange} />
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

export default Register