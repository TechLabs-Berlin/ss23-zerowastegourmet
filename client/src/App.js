import 'bulma/css/bulma.css';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Footer from './Footer';
import Recipe from './Recipe';
import Recipe1 from './images/recipe1.jpeg';
import Recipe2 from './images/recipe2.jpeg';
import Recipe3 from './images/recipe3.jpeg';
import Recipe4 from './images/recipe4.jpeg';
import Recipe5 from './images/recipe5.jpeg';
import Recipe6 from './images/recipe6.jpeg';


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
