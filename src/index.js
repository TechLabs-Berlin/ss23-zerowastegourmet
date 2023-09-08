x//import the react, react DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//get a reference to the div(ELEMENT) with ID root
const el = document.getElementById('root');
//tell React to take control of that ELEMENT
const root = ReactDOM.createRoot(el);
//create a COMPONENT (returns JSX)

//show that COMPONENT on the screen
root.render(<App />);
