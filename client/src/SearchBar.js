import './SearchBar.css';
import iconSearch from './images/search.svg';

function SearchBar() {
    return (
        <div className="level">
            <div className="level-item" style={{ padding: "2rem" }}>
                <div className="field has-addons">
                    <p className="control">
                        <input className="input" type="text" placeholder="Type 3 ingredients" />
                    </p>
                    {/* 
                <p className="control"> */}
                    <button className="button">
                        <img className="navbar-icon-search" src={iconSearch} />
                        {/* Find recipes */}
                    </button>
                    {/* </p> */}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;