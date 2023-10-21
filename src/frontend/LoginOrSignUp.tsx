import React from 'react';
import { Link } from 'react-router-dom';
import aiviLogo from '/Users/harish/aivisor/src/frontend/aivi.png';
import './LoginPage.css'; // Import your CSS file

const LoginOrSignUp = () => {
  return (
    <div className="container">
      <img src={aiviLogo} alt="Aivi Logo" className="aivi-logo" />
      <h1>College Source</h1>
      <p>Your go-to place for everything University </p>
      <div>
        <Link to="/login">
          <button className="round-button">Login</button>
        </Link>
      </div>
      <div>
        <Link to="/signup">
          <button className="round-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginOrSignUp;
