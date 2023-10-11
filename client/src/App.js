import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { UserProfile } from './pages/UserProfile';
import { Navbar } from './pages/Navbar';
import { RecipePage } from './pages/RecipePage';
import { Footer } from './pages/Footer';
import 'bulma/css/bulma.css';
import IsPrivate from './pages/isPrivate';

function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userprofile" element={<IsPrivate><UserProfile /></IsPrivate>} />
                <Route path="/recipepage" element={<RecipePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
