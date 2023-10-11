import './SearchBar.css';
import { useState } from 'react';
import { SearchResult } from './SearchResult';
import iconSearch from '../images/search.svg';

// search query?
// const App = () => {
//     const [query, setQuery] = React.useState("");
//     const [result, setResult] = React.useState("");
//     React.useEffect(() => {
//         Api.invokeQuery(query)
//             .then(result => setResult(result));
//     }, [query]);
//     return (
//         <div>
//             <Navbar value={query} onChange={setQuery} />
//             <SearchResult> { result } </SearchResult>
//         </div>
//     )
// }

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