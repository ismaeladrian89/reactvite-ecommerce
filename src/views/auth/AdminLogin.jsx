import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook, FaGoogle} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducers';

const AdminLogin = () => {

    const dispatch = useDispatch()

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(admin_login(state))
        //dispatch(admin_login)
        //console.log(state)
    }

    /*const handleLogin = async () => {
        try{const response =  await api.post('/admin-login', {
            email: email,
            password: password
           });
        console.log(response.data)} catch (error) {
            console.log(error);
        }
      }*/

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md text-left'>
                    <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                    <p className='text-sm mb-3 font-medium'>Please Sign In your account</p>

                <form onSubmit={submit}>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor='name'>Email</label>
                        <input onChange={inputHandle} value={state.email}
                         className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md  ' type='text' name='email' placeholder='Email' id='email' required/>
                    </div>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={inputHandle} value={state.password}
                        className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md  ' type='password' name='password' placeholder='Password' id='password' required/>
                    </div>
                    
                    <button className='bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 cursor-pointer'>Sign In</button>

                    <div className='flex items-center mb-3 gap-3 justify-center'>
                        <p>Don't Have an account? <Link className='font-bold' to='/register'>Sign Up</Link></p>
                    </div>


                </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;