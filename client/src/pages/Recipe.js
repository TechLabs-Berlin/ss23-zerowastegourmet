import './Recipe.css';

export function Recipe({ title, image, description }) {
    return (
        <div className="card height-card">
            <div className="card-image">
                <figure className="image is-3by2">
                    <img src={image} alt="recipe" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{description}</p>
                </div>
            </div>
        </div>
    );
}

// export default Recipe;