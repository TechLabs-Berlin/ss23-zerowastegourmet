import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { UserProfile } from './pages/UserProfile';
import { Navbar } from './components/Navbar';
import { RecipePage } from './pages/RecipePage';
import { Footer } from './components/Footer';
import IsPrivate from './components/isPrivate';
import 'bulma/css/bulma.css';

function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userprofile" element={<IsPrivate><UserProfile /></IsPrivate>} />
                <Route path="/RecipePage/:recipeTitle" element={<RecipePage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
