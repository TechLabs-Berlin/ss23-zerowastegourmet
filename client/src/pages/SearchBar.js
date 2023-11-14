import './SearchBar.css';
import { useState } from 'react';
import iconSearch from '../images/search.svg';
import axios from 'axios';

export function SearchBar( { onSearchResults } ) {
  const [recipes, setRecipes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const connectionToBackend = async () => {
    try {
      const response = await axios.post('http://localhost:2000/recipes', { data: inputValue });

      if (response.status === 200) {
        const { recipes: recipeData } = response.data;
        setRecipes(recipeData);
        setInputValue("");
        if (typeof onSearchResults === 'function') {
          onSearchResults(recipeData);
        }
        console.log('Data sent successfully');
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='level'>
      <div className='level-item' style={{ padding: '2rem' }}>

        <div className='field has-addons'>
          <input
            type='text'
            className='input'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Type 3 ingredients' />
          <button className='button' onClick={connectionToBackend}><img className='navbar-icon-search' src={iconSearch} alt='Search' />
          </button>
        </div>
      </div>
    </div>
  )
}

