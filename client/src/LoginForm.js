import React, { useState, useRef, useEffect, useContext  } from 'react';
import 'bulma/css/bulma.min.css';
import './LoginForm.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from './context/auth.context';

const LoginForm = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const dropdownRef = useRef(null);
 
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post("http://localhost:2000/login", requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/userprofile");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };



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
          <form onSubmit={handleLoginSubmit} className="dropdown-content p-0">
            <div className="box">
            <h1 className='title is-4 has-text-centered'>Login</h1>
              <div className="field mt-1">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="text"  value={email} onChange={handleEmail} placeholder="Email" />
                </div>
              </div>
              <div className="field mt-1">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" value={password} onChange={handlePassword} placeholder="Password" />
                </div>
              </div>
              <div className="field mt-5">
                <div className="control">
                  <button type="submit" className="button is-fullwidth is-info is-rounded">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
