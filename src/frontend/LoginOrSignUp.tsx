import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file
import collegeAidLogo from '/Users/harish/aivisor/src/frontend/collegeAid.png'; 
import blackBackground from '/Users/harish/aivisor/src/frontend/black.png';

const LoginOrSignUp = () => {
  return (
      <div className="collegeAidContainer" style={{ backgroundImage: `url(${blackBackground})` }}>
          <div className="buttonsContainer">
          <Link to="/login">
              <button className="loginBtn">Log In</button>
          </Link>
          <Link to="/signup">
              <button className="registerBtn">Register</button>
          </Link>
          </div>
          <div className="logoContainer" style={{ marginTop: '50px' }}>
              <img src={collegeAidLogo} alt="College Logo" className="college-logo" />
          </div>
          <div style={{ fontFamily: 'Roboto, sans-serif', alignSelf: 'flex-start' }}>
                <h1 style={{ fontSize: '100px', color: 'white'}}>COLLEGEaiD</h1>
          </div>
      </div>
  );
}

export default LoginOrSignUp;
