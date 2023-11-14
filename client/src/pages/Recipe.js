import "./Recipe.css";
import { Link } from "react-router-dom"

export function Recipe({ title, image, description, onClick }) {
    const handleClick = () => {
        onClick(title);
    };
    return (
        <Link to={`/RecipePage/${title}` } onClick={handleClick}>
            <div className="card height-card">
                <div className="card-image has-text-centered level-item">
                    <figure className="image is-128x128 ">
                        <img src={image} alt="logo" />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};