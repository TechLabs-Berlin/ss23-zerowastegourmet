x//import the react, react DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
//get a reference to the div(ELEMENT) with ID root
const el = document.getElementById('root');
//tell React to take control of that ELEMENT
const root = ReactDOM.createRoot(el);
//create a COMPONENT (returns JSX)
function App() {
    let message = 'bye there!'
    if (Math.random() > 0.5) {
        message = 'hi there!'
    }
    return <h1>{message}This is an web application of the Zero Waste Gourmet</h1>;
}
//show that COMPONENT on the screen
root.render(<App />);
