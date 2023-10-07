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
        <div className="level">
            <div className="level-item" style={{ padding: "2rem" }}>
                <div className="field has-addons">
                    <p className="control">
                        <input className="input" type="text" placeholder="Type 3 ingredients" />
                    </p>
                    {/* 
                <p className="control"> */}
                    <button className="button" onClick={handleClick}>
                        <img className="navbar-icon-search" src={iconSearch} />
                    </button>
                    {/* </p> */}
                    <div className='recipe-list'>{renderedResults}</div>
                </div>
            </div>
        </div>
    );
}

// export default SearchBar;