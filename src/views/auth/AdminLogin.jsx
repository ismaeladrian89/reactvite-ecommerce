import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducers';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
 
const AdminLogin = () => {
  const navigate = useNavigate();  
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage, token } = useSelector(
    (state) => state.auth
  );
 
  const [state, setState] = useState({
    email: '',
    password: '',
  });
 
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
 
  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };
 
  const overrideStyle = {
    display: 'flex',
    margin: '0 auto',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center',
  };
 
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
    if (successMessage) {
      toast.success(successMessage);
      console.log('Token:', token);
      navigate('/')
    }
  }, [errorMessage, successMessage, token]);
 
  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md text-left'>
          <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
          <p className='text-sm mb-3 font-medium'>Please Sign In your account</p>
 
          <form onSubmit={submit}>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                type='text'
                name='email'
                placeholder='Email'
                id='email'
                required
              />
            </div>
 
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                type='password'
                name='password'
                placeholder='Password'
                id='password'
                required
              />
            </div>
 
            <button
              disabled={loader}
              className='bg-slate-800 w-full text-white rounded-md px-7 py-2 mb-3 cursor-pointer'
            >
              {loader ? (
                <PropagateLoader color='#fff' cssOverride={overrideStyle} />
              ) : (
                'Sign In'
              )}
            </button>
 
            <div className='flex items-center mb-3 gap-3 justify-center'>
              <p>
                Don't Have an account?{' '}
                <Link className='font-bold' to='/register'>
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default AdminLogin; 