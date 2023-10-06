import 'bulma/css/bulma.css';
import Home from './Home'
import UserProfile from './UserProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    
    return (
       
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/userprofile" element={<UserProfile />} />
            </Routes>
    
    );
}

export default App;
