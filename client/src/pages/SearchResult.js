import './SearchResult.css';
import { useState } from 'react';
import recipe1 from '../images/recipe1.jpeg';
import recipe2 from '../images/recipe2.jpeg';
import recipe3 from '../images/recipe3.jpeg';


const recipeMap = {
    recipe1,
    recipe2,
    recipe3
}

export function SearchResult({ type }) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        < div className='search-result' onClick={handleClick} is-multiline>
            <img className='recipe' alt='recipe' src={recipeMap[type]} />
        </div >
    );
};

// export default SearchResult;
