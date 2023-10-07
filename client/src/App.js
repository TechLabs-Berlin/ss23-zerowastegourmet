import 'bulma/css/bulma.css';
import Home from './Home'
import UserProfile from './UserProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import IsPrivate from './IsPrivate';


function App() {

    return (
       <>
       <Navbar />
       <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/userprofile" element={<IsPrivate><UserProfile /></IsPrivate>} />
        </Routes>
       
       
       </>

    
    );
}

export default App;
