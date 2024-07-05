import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Header authenticated={false}/>
    <div className='flex items-center justify-center w-full mt-14'>
        <div className='flex flex-col gap-4 text-center sm:w-1/3 w-1/2 p-6 border border-slate-300 rounded-md shadow-lg'>
            <h1 className='font-extrabold text-xl tracking-wide'>Welcome to Retinoscan</h1>
            <p className='text-md italic'>The world's most advanced AI medical tool for eye health</p>
            <Link to='/signin' className='bg-blue-600 text-white py-3 font-bold text-md rounded-lg transform transition-transform duration-300 hover:scale-105'>Sign in</Link>
            <p className='text-slate-600'>or</p>
            <Link to='/signup' className='bg-slate-300 py-3 font-bold text-md rounded-lg transform transition-transform duration-300 hover:scale-105'>Create an account</Link>
            <Link to='/forgotPassword' className='text-slate-700 underline text-md font-light transition-opacity duration-300 hover:opacity-75'>Forgot your password?</Link>
        </div>
    </div>
</div>

  )
}

export default Home