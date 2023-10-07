import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProfile } from './pages/UserProfile';
import { Home } from './pages/Home'
import 'bulma/css/bulma.css';


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userprofile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
