import React, { useState } from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {signIn} = useAuth();
  const handleSubmit = async (e) => {
    try{
        setLoading(true);
        await signIn(email, password);
        navigate("/dashboard");
    }
    catch(e){
        alert(e.message);
        console.log(e);
    }
    setLoading(false);
  }
  return (
    <div>
    <Header authenticated={false}/>
    <div className='flex items-center flex-col gap-10 justify-center w-full mt-16'>
        <h1 className='text-4xl font-bold text-gray-800'>Sign In</h1>
        <form className='flex flex-col gap-6 text-center sm:w-1/3 w-3/4 bg-white p-8 rounded-lg shadow-md'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-left text-gray-700 font-medium'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}} 
                    className='w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500' 
                    placeholder='Enter your email' 
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='pwd' className='text-left text-gray-700 font-medium'>Password</label>
                <input 
                    type='password' 
                    id='pwd' 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}} 
                    className='w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500' 
                    placeholder='Enter your password' 
                />
                <Link 
                    to='/forgotPassword' 
                    className='text-blue-600 text-sm font-light underline mt-1 ml-1 hover:text-blue-800 transition duration-300'
                >
                    Forgot your password?
                </Link>
            </div>
            <button 
                className='w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300' 
                onClick={handleSubmit} 
                disabled={loading}
            >
                Sign in
            </button>
        </form>
        <div className='flex flex-col gap-2 text-center sm:w-1/3 w-3/4'>
            <p className='text-sm text-gray-600'>
                Don't have an account? 
                <Link 
                    to='/signup' 
                    className='text-blue-600 underline hover:text-blue-800 transition duration-300'
                >
                    Register
                </Link>
            </p>
        </div>
    </div>
</div>

  )
}

export default SignIn