import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProfile } from './pages/UserProfile';
import { Home } from './pages/Home'
import 'bulma/css/bulma.css';
<<<<<<< HEAD
=======
import Home from './Home'
import UserProfile from './UserProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import IsPrivate from './IsPrivate';
>>>>>>> 478f02680b01896fddfa37e9f9642610b87bc302


function App() {

    return (
<<<<<<< HEAD
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userprofile" element={<UserProfile />} />
            </Routes>
        </Router>
=======
       <>
       <Navbar />
       <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/userprofile" element={<IsPrivate><UserProfile /></IsPrivate>} />
        </Routes>
       
       
       </>

    
>>>>>>> 478f02680b01896fddfa37e9f9642610b87bc302
    );
}

export default App;
