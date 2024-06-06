import React, { useState } from 'react';
import '../style/Foreget.css';

function Forget() {
  const [email, setEmail] = useState('');
  const [showNav, setShowNav] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="App">
      <header>
        <nav className={`navbar ${showNav ? 'show' : ''}`}>
          <div className="logo">Retinoscan</div>
          <div className="nav-links">
            <a href="#">Sign in</a>
            <a href="#">Register</a>
          </div>
          <button className="nav-toggle" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </header>
      <main>
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your email to continue</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default Forget;