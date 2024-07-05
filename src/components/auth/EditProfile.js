
import React, {useState} from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const EditProfile = () => {
  const {currentUser, editPassword, editEmail} = useAuth();
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const promises = [];
  const handleSubmit = () => {
    setLoading(true);
    if(email !== currentUser.email){
        promises.push(editEmail(email));
    }
    if(password !== confirmPassword){
        return;
    }
    if(password !== '' && password !== currentUser.password){
        promises.push(editPassword(password));
    }
    Promise.all(promises).then(() => {
        alert('Profile updated successfully');
        navigate('/dashboard');
    }).catch((e) => {
        alert(e.message);
    }).finally(() => {
        setLoading(false);
    })
  }
  return (
    <div>
    <Header authenticated={false} />
    <div className='flex items-center flex-col gap-10 justify-center w-full mt-16'>
        <h1 className='text-4xl font-bold text-gray-900'>Update Profile</h1>
        <form className='flex flex-col gap-6 text-center sm:w-1/3 w-3/4 bg-white p-8 rounded-xl shadow-lg'>
            <div className='flex flex-col'>
                <label htmlFor='email' className='text-left text-gray-700 font-medium'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}} 
                    className='w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-600' 
                    placeholder='Enter your email' 
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='pwd' className='text-left text-gray-700 font-medium'>Password</label>
                <input 
                    type='password' 
                    id='pwd' 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}} 
                    className='w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-600' 
                    placeholder='Leave blank to not change' 
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='confirmpwd' className='text-left text-gray-700 font-medium'>Confirm Password</label>
                <input 
                    type='password' 
                    id='confirmpwd' 
                    value={confirmPassword} 
                    onChange={(e) => {setConfirmPassword(e.target.value)}} 
                    className='w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-600' 
                    placeholder='Leave blank to not change' 
                />
            </div>
        </form>
        <div className='sm:w-1/3 w-3/4'>
            <button 
                className='bg-blue-600 text-white py-3 font-semibold text-base rounded-md w-full hover:bg-blue-700 transition duration-300' 
                onClick={handleSubmit} 
                disabled={loading}
            >
                Update
            </button>
            <Link 
                to='/dashboard' 
                className='underline text-blue-600 text-base block text-center mt-4 hover:text-blue-800 transition duration-300'
            >
                Cancel
            </Link>
        </div>
    </div>
</div>

  )
}

export default EditProfile
