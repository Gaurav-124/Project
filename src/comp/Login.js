import React from 'react';
import { Link } from 'react-router-dom';
import '../comp/log.css';
function Login() {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Retinoscan</span>
          <span className="title">Login</span>
          <form>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
          </form>
          <p>Don't have an account?
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
