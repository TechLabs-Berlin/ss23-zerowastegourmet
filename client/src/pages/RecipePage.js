import logo from "../images/logo.png";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import 'bulma/css/bulma.min.css'

export function RecipePage() {

  const { recipeTitle } = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
    
  const getOneRecipe = (title) => {
    axios.get(`http://localhost:2000/recipes/${title}`)
      .then((response) => {
        setSelectedRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
      });
  };

  useEffect(()=> {
    getOneRecipe(recipeTitle)
  }, [] );
   
    return (
        <>
            <section className="hero is-success">
                <div className="hero-body">
                    <div className="title has-text-centered">
                        <h1>{recipeTitle}</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="columns my-4 is-mobile is-centered">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img src={logo} alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="columns is-mobile is-centered" >
                    <div className="card is-half">
                        <div className="card-content">
                            <h2 className="has-text-centered mb-3"><strong>Ingredients:</strong></h2>
                            <ul className="has-text-centered">
                                {selectedRecipe?.INGREDIENTS.split(',').map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="columns is-mobile is-centered">
                <div className="m-6 is-size-5 has-text-weight-medium ">
                    <h2 className="has-text-centered mb-4"><strong>Instructions:</strong></h2>
                    <ul className="has-text-centered">
                        {selectedRecipe?.INSTRUCTIONS.split('.').map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};
