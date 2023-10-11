import './SearchResult.css';
import { useState } from 'react';
// import { Recipe } from './Recipe';
import recipe1 from '../images/recipe1.jpeg';
import recipe2 from '../images/recipe2.jpeg';
import recipe3 from '../images/recipe4.jpeg';
import recipe4 from '../images/recipe5.jpeg';
import recipe5 from '../images/recipe6.jpeg';

const recipeMap = {
    recipe1,
    recipe2,
    recipe3,
    recipe4,
    recipe5,
}

export function SearchResult({ type }) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div className='column'>
            < div className='search-result' onClick={handleClick}>
                <div className='columns'>
                    {/* <div className='card-image'> */}
                    <img className='image is-128x128' alt='recipe' src={recipeMap[type]} />
                </div>
                <div className='card-content'>
                    <div className='media-content'>
                        <section>
                            <p className='title is-4'>Veggie Stock</p>
                        </section>
                        <p className='subtitle is-5 mt-3'>You can use vegetable scraps to make stock</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 카드 큼
// return (
//     < div className='search-result' onClick={handleClick}>

//         <div className='column is-one-quarter'>
//             <div className='column is-10'>
//                 {/* <div className='card-image'> */}
//                 <img className='image is-3by2' alt='recipe' src={recipeMap[type]} />
//             </div>
//             <div className='card-content'>
//                 <div className='media-content'>
//                     <section>
//                         <p className='title is-4'>Veggie Stock</p>
//                     </section>
//                     <p className='subtitle is-5'>You can use vegetable scraps to make stock</p>
//                 </div>
//                 {/* </div> */}
//             </div>
//         </div>

//     </div>
// );


// 나오는데 너무 큼
// return (
//     < div className='search-result' onClick={handleClick} is-multiline>
//         {/* <div className="card height-card"> */}
//         <div className="card-image">
//             <img className='has-ratio' width='auto' height='100px' alt='recipe' src={recipeMap[type]} />

//             {/* <figure className="image is-3by2">
//             <img src={image} alt="recipe" />
//         </figure> */}
//         </div>
//         <div className='card-content'>
//             <div className='media-content'>
//                 <section>
//                     <p className='title is-5'>Veggie Stock</p>
//                 </section>
//                 <p className='subtitle is-6'>You can use vegetable scraps to make stock</p>
//             </div>
//         </div>
//         {/* <div className='card-content'>
//             <div className='media-content'>
//                 <p className="title is-4">{title}</p>
//                 <p className="subtitle is-6">{description}</p>
//             </div>
//         </div> */}
//         {/* </div > */}
//     </div>
// );
// };


// export function SearchResult({ Recipe }) {
//     const [clicks, setClicks] = useState(0);
//     const handleClick = () => {
//         setClicks(clicks + 1);
//     };

// export function SearchResult({ type, title, description }) {
//     const [clicks, setClicks] = useState(0);
//     const handleClick = () => {
//         setClicks(clicks + 1);
//     };

//     return (
//         < div className='search-result' onClick={handleClick} is-multiline>
//             {/* <div className="card height-card"> */}
//             {/* <div className="card-image"> */}
//             <img className='recipe' alt='recipe' src={recipeMap[type]} />
//             <p className="title is-5">{title}</p>
//             <p className="subtitle is-7">{description}</p>
//             {/* <figure className="image is-3by2">
//                     <img src={image} alt="recipe" />
//                 </figure> */}
//             {/* </div> */}

//             {/* <div className='card-content'>
//                     <div className='media-content'>
//                         <p className="title is-4">{title}</p>
//                         <p className="subtitle is-6">{description}</p>
//                     </div>
//                 </div> */}
//             {/* </div > */}
//         </div>
//     );
// };


// export default SearchResult;



// return (
//     < div className='search-result' onClick={handleClick} is-multiline>
//         <Recipe
//             title='Broccoli soup'
//             image={recipe1}
//             description='You can use broccoli stalks. It will be more delicious and healthy!'
//         />
//     </div>
// );
// };


// is-multiline