import React, { useState, useRef, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './LoginForm.css'

const LoginForm = () => {
  const [showLogin, setShowLogin] = useState(false);
  const dropdownRef = useRef(null);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const closeLogin = () => {
    setShowLogin(false);
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
    <div className="navbar-item pl-0" ref={dropdownRef}>
      <div className={`dropdown ${showLogin ? 'is-active' : ''} is-right`}>
        <div className="dropdown-trigger">
          <button onClick={toggleLogin} className="button">Login</button>
        </div>
        <div className="dropdown-menu ">
          <div className="dropdown-content p-0">
            <div className="box">
            <h1 className='title is-4 has-text-centered'>Login</h1>
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
                  <button className="button is-fullwidth is-info is-rounded">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
