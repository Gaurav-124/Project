import React, { useState } from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
        alert('Passwords do not match');
        return;
    }
    try {
        setLoading(true);
        await signUp(email, password);
        navigate("/dashboard");
    }
    catch (e) {
        alert('Error: ' + e.message);
        console.log(e);
    }
    setLoading(false);
  }
  return (
    <div>
    <Header authenticated={false}/>
    <div className='flex items-center flex-col gap-10 justify-center w-full mt-14'>
        <h1 className='text-4xl font-bold tracking-wide'>Sign up</h1>
        <form className='flex flex-col gap-6 text-center sm:w-1/3 w-3/4 p-6 border border-gray-300 rounded-md shadow-lg'>
            <div className='flex flex-col'>
                <label htmlFor='email' className='text-left text-lg mb-1'>Email</label>
                <input type='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}} 
                className='w-full p-3 rounded border border-slate-400 outline-none focus:border-blue-500 transition duration-200' placeholder='Enter your email'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor='pwd' className='text-left text-lg mb-1'>Password</label>
                <input type='password' id='pwd' value={password} onChange={(e) => {setPassword(e.target.value)}} 
                className='w-full p-3 rounded border border-slate-400 outline-none focus:border-blue-500 transition duration-200' placeholder='Enter your password'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor='confirmpwd' className='text-left text-lg mb-1'>Confirm Password</label>
                <input type='password' id='pwd' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} 
                className='w-full p-3 rounded border border-slate-400 outline-none focus:border-blue-500 transition duration-200' placeholder='Confirm your password'/>
            </div>
        </form>
        <div className='sm:w-1/3 w-3/4'>
            <button className='bg-blue-600 text-white py-3 font-bold text-md rounded-lg w-full transition-transform transform duration-300 hover:scale-105 disabled:opacity-50' onClick={handleSubmit} disabled={loading}>Sign up</button>
            <p className='text-sm text-slate-600 mt-4'>Already have an account? <Link to='/signin' className='underline text-blue-500 hover:text-blue-700'>Sign in</Link></p>
        </div>
    </div>
</div>

  )
}

export default SignUp