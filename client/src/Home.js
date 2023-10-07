import 'bulma/css/bulma.css';
import SearchBar from './SearchBar';
import Navbar from './Navbar'
import Footer from './Footer';
import Recipe from './Recipe';
import img1 from './images/recipe1.jpeg'


function Home() {
    return (
        <div>
            <SearchBar />
            <div className='container'>
                <section className='section'>
                    <div className='columns is-multiline'>
                        <div className='column is-4'>
                            <Recipe
                                title='Veggie Stock'
                                image={img1}
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

export default Home;

