import img7 from '../images/recipe7.jpeg';

// export default RecipePage = () => {
export function RecipePage() {
    return (
        <>
            <section className="hero is-success">
                <div className="hero-body">
                    <p className="title has-text-centered">
                        Mushroom Patty
                    </p>
                </div >
            </section >

            <section>
                <div className="columns my-4">
                    <div className="card">
                        <div clasNames="card-image">
                            <figure className="image" >
                                <img src={img7} alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="is-medium">
                <p className="m-6 p-6 is-size-5 has-text-weight-medium">
                    Step 1.
                    <br />To make this easy recipe, wash the mushrooms, onions and organise the ingredients in place. Then take a plate and crumble the bread pieces. In the meantime, chop the mushrooms, onions and green chilies. Then take a pan and add some water, add in the chopped mushrooms with a dash of salt. par-boil the mushrooms, then drain the water and keep them aside.<br />
                    <br />Step 2.  <br />Prepare the mushroom patty mixture Make patties

                    Take a large bowl, add mushrooms, eggs, bread crumbs, cheese, onion, flour, salt, thyme, and black pepper in a bowl and mix well. Scoop some mixture and make round balls, press to flatten them and make patties.<br />
                    <br />Step 3.  <br />Heat a pan and fry the patties

                    Take a pan over medium flame and add in the oil. Once the oil is hot enough, gently slide the patties and fry them by flipping sides, fry them until they turn golden in colour. Place the patties on an absorbent tissue paper.
                    Mushroom Patty<br />
                    <br />Step 4.  <br />Serve hot

                    Transfer the patties to the serving plate and serve with a dip or chutney of your choice. Pair these patties with a salad of your choice and make it a delicious wholesome meal.
                    <br /> <br /><a href="https://recipes.timesofindia.com/recipes/mushroom-patty/rs75764830.cms">Original Recipe</a>
                </p>
            </section>
        </>
    );
}


// import { Link } from 'react-router-dom';

// export function Home() {
//     return (
//         <h1>Recipe to cook with mushroom stem</h1>
//     )
// }