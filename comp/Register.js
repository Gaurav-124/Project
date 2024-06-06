import React from 'react';
import { Link } from 'react-router-dom';
import '../comp/log.css';
function Register() {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Retinoscan</span>
            <span className="title">Register</span>
            <form >
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="password" placeholder='confirm-pasword' />
                <button>sign up</button>
            </form>
            <p>you do have account?
              <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register;
