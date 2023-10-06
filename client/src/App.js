import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import 'bulma/css/bulma.css';
import { Home } from './pages/Home'
import { Navbar } from './pages/Navbar'
import { LoginForm } from './pages/LoginForm';
import { Signup } from './pages/Signup';
import { SearchBar } from './pages/SearchBar';
import { SearchResult } from './pages/SearchResult';
import { Recipe } from './pages/Recipe';
import { Footer } from './pages/Footer';

import img1 from './images/recipe1.jpeg'
import img2 from './images/recipe2.jpeg'
import img3 from './images/recipe3.jpeg'
import img4 from './images/recipe4.jpeg'
import img5 from './images/recipe5.jpeg'
import img6 from './images/recipe6.jpeg'

// function getSearchResult() {
//     const recipes = ['recipe1', 'recipe2', 'recipe3']
//     return recipes[Math.floor(Math.random() * recipes.length)]
// }

function App() {

    // const [recipes, setRecipes] = useState([]);
    // const handleClick = () => {
    //     setRecipes([...recipes, getSearchResult()]);
    // };
    // const renderedResults = recipes.map((recipe, index) => {
    //     return <SearchResult type={recipe} key={index} />
    // });

    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/footer' element={<Footer />} />

            <Route path='/navbar' element={<Navbar />} />
            <Route path='/recipe' element={<Recipe />} />
            <Route path='/searchbar' element={<SearchBar />} />
            <Route path='/searchresult' element={<SearchResult />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>

        // <div>
        // {/* <Navbar />
        // <SearchBar />
        // <Home /> */}
        // {/* <div className='container'>
        //     <section className='section'>
        //         <div className='columns is-multiline'>
        //             <div className='column is-4'>
        //                 <Recipe
        //                     title='Veggie Stock'
        //                     image={img1}
        //                     description='You can use vegetable scraps to make stock'
        //                 />
        //             </div>
        //             <div className='column is-4'>
        //                 <Recipe
        //                     title='Mushroom patties'
        //                     image={img2}
        //                     description='You can use end of mushrooms as well. Yummy!'
        //                 />
        //             </div>
        //             <div className='column is-4'>
        //                 <Recipe
        //                     title='Cauliflower soup'
        //                     image={img3}
        //                     description='You can use cauliflower stems as well, with other ingredients.'
        //                 />
        //             </div>
        //             <div className='column is-4'>
        //                 <Recipe
        //                     title='Broccoli soup'
        //                     image={img4}
        //                     description='You can use broccoli stalks. It will be more delicious and healthy!'
        //                 />
        //             </div>
        //             <div className='column is-4'>
        //                 <Recipe
        //                     title='Broccoli soup'
        //                     image={img5}
        //                     description='You can use broccoli stalks. It will be more delicious and healthy!'
        //                 />
        //             </div>
        //             <div className='column is-4'>
        //                 <Recipe
        //                     title='Broccoli soup'
        //                     image={img6}
        //                     description='You can use broccoli stalks. It will be more delicious and healthy!'
        //                 />
        //             </div>
        //         </div>
        //     </section>
        // </div> */}
        // {/* <Footer /> */ }
        // </div>
    );
}

