import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


root.render(
    // <Router>
    <AuthProviderWrapper>
        <App />
    </AuthProviderWrapper>
    // </Router>
);
