import React, { useState } from 'react'
import Header from '../Header';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPwd = () => {
  const [email, setEmail] = useState('');
  const { resetPwd } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await resetPwd(email);
      alert('Email sent successfully');
    }
    catch(e){
      alert(e.message);
    }
  }
  return (
    <div>
    <Header authenticated={false} />
    <div className='flex items-center flex-col gap-10 justify-center w-full mt-16'>
        <h1 className='text-4xl font-bold text-gray-800'>Reset Password</h1>
        <form className='flex flex-col gap-6 text-center sm:w-1/3 w-3/4 bg-white p-8 rounded-lg shadow-md'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-left text-gray-700 font-medium'>Enter your email to continue</label>
                <input 
                    type='email' 
                    id='email' 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}} 
                    className='w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500' 
                    placeholder='Enter your email' 
                />
            </div>
            <button 
                className='w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300' 
                type='submit' 
                onClick={handleSubmit}
            >
                Send
            </button>
        </form>
        <div className='flex flex-col gap-2 text-center sm:w-1/3 w-3/4'>
            <Link 
                to='/signin' 
                className='text-sm text-blue-600 underline hover:text-blue-800 transition duration-300'
            >
                Sign in
            </Link>
            <p className='text-sm text-gray-600'>
                Don't have an account? 
                <Link 
                    to='/signup' 
                    className='text-blue-600 underline hover:text-blue-800 transition duration-300 ml-1'
                >
                    Register
                </Link>
            </p>
        </div>
    </div>
</div>

  )
}

export default ForgotPwd