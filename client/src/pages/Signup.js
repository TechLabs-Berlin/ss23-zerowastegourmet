import React, { useState, useRef, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './LoginForm.css';
import axios from 'axios';

export function Signup() {

  const SignupForm = () => {
    const [showLogin, setShowSignup] = useState(false);
    const dropdownRef = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const closeSignUp = () => {
      setShowSignup(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      const requestBody = { email, password }

      axios.post("http://localhost:2000/signup", requestBody)
        .then((result) => {
          setRegister(true)
          closeSignUp()
        })
        .catch((error) => {
          error = new Error()
        })
    };

    const toggleLogin = () => {
      setShowSignup(!showLogin);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          closeSignUp();
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
              <form onSubmit={(e) => handleSubmit(e)} className="box">
                <h1 className='title is-4 has-text-centered'>Sign Up</h1>
                <div className="field mt-1">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="field mt-1">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="control">
                    <button type="submit" onClick={(e) => handleSubmit(e)} className="button is-fullwidth is-info is-rounded">Signup</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

// export default Signup;
