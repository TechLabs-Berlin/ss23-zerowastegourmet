import React, { useState, useRef, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './LoginForm.css'

const SignupForm = () => {
  const [showLogin, setShowSignup] = useState(false);
  const dropdownRef = useRef(null);

  const toggleLogin = () => {
    setShowSignup(!showLogin);
  };

  const closeLogin = () => {
    setShowSignup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeLogin();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-item" ref={dropdownRef}>
      <div className={`dropdown ${showLogin ? 'is-active' : ''} is-right`}>
        <div className="dropdown-trigger">
          <button onClick={toggleLogin} className="button">Signup</button>
        </div>
        <div className="dropdown-menu ">
          <div className="dropdown-content p-0">
            <div className="box">
            <h1 className='title is-4 has-text-centered'>Sign Up</h1>
              <div className="field mt-1">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Email" />
                </div>
              </div>
              <div className="field mt-1">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" placeholder="Password" />
                </div>
              </div>
              <div className="field mt-5">
                <div className="control">
                  <button className="button is-fullwidth is-info is-rounded">Signup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
