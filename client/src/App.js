import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { LoginForm } from './pages/LoginForm'
import { UserProfile } from './pages/UserProfile';
import { Navbar } from './pages/Navbar';
import { SearchBar } from './pages/SearchBar';
import { SearchResult } from './pages/SearchResult';
import { RecipePage } from './pages/RecipePage';
import { Footer } from './pages/Footer';
import 'bulma/css/bulma.css';
// import IsPrivate from './IsPrivate';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/recipepage" element={<RecipePage />} />
            </Routes>
        </Router>
    );
}

export default App;
