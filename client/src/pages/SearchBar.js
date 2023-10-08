import './SearchBar.css';
import { useState } from 'react';
import { SearchResult } from './SearchResult';
import iconSearch from '../images/search.svg';

function getSearchResult() {
    const recipes = ['recipe1', 'recipe2', 'recipe3']
    return recipes[Math.floor(Math.random() * recipes.length)]
}

export function SearchBar() {
    const [recipes, setRecipes] = useState([]);
    const handleClick = () => {
        setRecipes([...recipes, getSearchResult()]);
    };
    const renderedResults = recipes.map((recipe, index) => {
        return <SearchResult type={recipe} key={index} />
    });

    return (
        <div className='level'>
            <div className='level-item' style={{ padding: '2rem' }}>

                <div className='field has-addons'>
                    <input type='text' className='input' placeholder='Type 3 ingredients' />
                    <button className='button' onClick={handleClick}><img className='navbar-icon-search' src={iconSearch} alt='Search' />
                    </button>
                </div>

                <div className='recipe-list'>{renderedResults}
                </div>
            </div>
        </div>
    )
}

// export default SearchBar;