import 'bulma/css/bulma.css';
import './App.css';
import SearchBar from './SearchBar';
import Navbar from './Navbar'
import Footer from './Footer';
import Recipe from './Recipe';


function App() {
    return (
        <div>

            <Navbar />
            <SearchBar />

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <Recipe
                                title='Veggie Stock'
                                // image={ }
                                description='You can use vegetable scraps to make stock'
                            />
                        </div>
                        <div className='column is-4'>
                            <Recipe
                                title='Mushroom patties'
                                description='You can use end of mushrooms as well. Yummy!'
                            />
                        </div>
                        <div className='column is-4'>
                            <Recipe
                                title='Cauliflower soup'
                                description='You can use cauliflower stems as well, with other ingredients.'
                            />
                        </div>
                        <div className='column is-4'>
                            <Recipe
                                title='Broccoli soup'
                                description='You can use broccoli stalks. It will be more delicious and healthy!'
                            />
                        </div>
                    </div>
                </section>
            </div>

            <Footer />

        </div>
    );
}

export default App;

// <section className="hero">
//                 <div className="hero-body">
//                     <p className="title">ZERO WASTE GOURMET</p>
//                     <p className="subtitle">Cook & Make No Waste With Our Recipes </p>
//                 </div>
//             </section>