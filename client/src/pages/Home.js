import 'bulma/css/bulma.css';
import { SearchBar } from './SearchBar';
import { Navbar } from './Navbar'
import { Footer } from './Footer';
import { Recipe } from './Recipe';
import img1 from '../images/recipe1.jpeg'
import img2 from '../images/recipe2.jpeg'
import img3 from '../images/recipe3.jpeg'
import img4 from '../images/recipe4.jpeg'
import img5 from '../images/recipe5.jpeg'
import img6 from '../images/recipe6.jpeg'


export function Home() {
    return (
        <div>
            <Navbar />
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
                                image={img2}
                                description='You can use end of mushrooms as well. Yummy!'
                            />
                        </div>
                        <div className='column is-4'>
                            <Recipe
                                title='Cauliflower soup'
                                image={img3}
                                description='You can use cauliflower stems as well, with other ingredients.'
                            />
                        </div>
                        <div className='column is-4'>
                            <Recipe
                                title='Broccoli soup'
                                image={img4}
                                description='You can use broccoli stalks. It will be more delicious and healthy!'
                            />
                        </div>
                        <div className='column is-4'>
                            <Recipe
                                title='Broccoli soup'
                                image={img5}
                                description='You can use broccoli stalks. It will be more delicious and healthy!'
                            />
                        </div>
                        <div className='column is-4'>
                            <Recipe
                                title='Broccoli soup'
                                image={img6}
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

// export default Home;

