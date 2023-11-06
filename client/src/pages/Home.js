import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { Recipe } from './Recipe';
import { RecipePage } from './RecipePage';
import axios from 'axios';
import logo from "../images/logo.png";

export function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:2000/all_recipes')
      .then((response) => {
        const recipes = response.data;
        setSearchResults(recipes.slice(0, 9));
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results.slice(0, 9));
  };

  const handleRecipeClick = (title) => {
    axios.get(`http://localhost:2000/recipes/${title}`)
      .then((response) => {
        setSelectedRecipe(response.data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
      });
  };

  return (
    <div>
      <SearchBar onSearchResults={handleSearchResults} />
      <div className='container'>
        <section className='section'>
          <div className='columns is-multiline'>
            {selectedRecipe ? (
              <RecipePage recipe={selectedRecipe}/>
            ) : (
              searchResults.map((recipe, index) => (
                <div className='column is-4' key={index}>
                    <Recipe
                      title={recipe.TITLE}
                      image={logo}
                      description='You can use vegetable scraps to make stock'
                      onClick={handleRecipeClick}
                    />
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};