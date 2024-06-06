import React from 'react';
import '../comp/Home.css';

import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="retinoscan-container">
      <div className="navbar">
        <span className="navbar-logo">Retinoscan</span>
      </div>
      <div className="content">
        <h1>Welcome to Retinoscan</h1>
        <p>The world's most advanced AI medical tool for eye health</p>
        <Link to="/login"><button className="sign-in-btn">Sign in</button></Link>
        {/* <a href="#/Signin"></a> */}
        <div className="divider">
          <span>or</span>
        </div>
        <Link to="/register"><button className="create-account-btn">Create an account</button></Link>
        {/* <a className='create-account-btn'  href="#/Register"></a> */}
        <p className="forgot-password">Forgot your password?</p>
      </div>
     
    </div>
  );
};

export default Home;