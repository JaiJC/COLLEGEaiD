import React from 'react';
import { Link } from 'react-router-dom';

const LoginOrSignUp = () => {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <p>Please select an option:</p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginOrSignUp;
