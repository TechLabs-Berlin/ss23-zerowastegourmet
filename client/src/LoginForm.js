import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

const LoginForm = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <div className="navbar-item">
        <button onClick={toggleLogin} className="button">Login</button>
      </div>
      <div className={`navbar-dropdown ${showLogin ? 'is-active' : ''}`}>
        {showLogin && (
          <div className="box">
            <button
              onClick={toggleLogin}
              className="delete"
              aria-label="close"
            ></button>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" placeholder="Username" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" placeholder="Password" />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Login</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

