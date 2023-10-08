import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
// import { BrowserRouter as Router } from "react-router-dom";
=======
import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> 478f02680b01896fddfa37e9f9642610b87bc302
import { AuthProviderWrapper } from "./context/auth.context";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


root.render(
<<<<<<< HEAD
    // <Router>
    <AuthProviderWrapper>
        <App />
    </AuthProviderWrapper>
    // </Router>
=======
    <Router>
        <AuthProviderWrapper>
            <App />
        </AuthProviderWrapper>
    </Router>
>>>>>>> 478f02680b01896fddfa37e9f9642610b87bc302
);
