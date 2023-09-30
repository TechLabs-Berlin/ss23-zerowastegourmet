import "./Navbar.css";
import logo_temp from "./images/logo_temp.png";
import iconHeart from "./images/Heart.svg";
import iconKitchen from "./images/kitchen.svg";
import iconCalendar from "./images/calendar.svg";
import iconSearch from "./images/search.svg";

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="./images/logo_temp.png" alt="logo_zerowastegourmet" />
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="Basic">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu" id="navbarBasic" >
                <a className="navbar-item">
                    <img className="navbar-icon-heart" src={iconHeart} />
                    Favorite
                </a>

                <a className="navbar-item">
                    <img className="navbar-icon" src={iconKitchen} />
                    My Kitchen
                </a>

                <a className="navbar-item">
                    <img className="navbar-icon" src={iconCalendar} />
                    Weekly Plan
                </a>

                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button">
                            Sign up
                        </a>
                        <a className="button">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;


// is-fixed-top