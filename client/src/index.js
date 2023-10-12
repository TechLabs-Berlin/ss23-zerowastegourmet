import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProviderWrapper } from "./context/auth.context";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


root.render(
    <AuthProviderWrapper>
        <App />
    </AuthProviderWrapper>
);
