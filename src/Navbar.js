import "./Navbar.css";
import logo_temp from "./images/logo_temp.png";
import iconHeart from "./images/Heart.svg";
import iconKitchen from "./images/kitchen.svg";
import iconCalendar from "./images/calendar.svg";
import iconSearch from "./images/search.svg";

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            {/* <div className="navbar-brand"> */}
            <a className="navbar-item" href="/">
                <img src="./images/logo_temp.png" alt="logo_zerowastegourmet" width="112" />
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            {/* </div> */}

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




//     <nav className="navbar">
//     <a href="/" className="logo">
//         <img src="logo_temp" alt="logo" />
//     </a>
//     <ul className="nav-links">
//         <li className="nav-item"><a href="#">Favorite</a></li>
//         <li className="nav-item"><a href="#">My Kitchen</a></li>
//         <li className="nav-item"><a href="#">Weekly Plan</a></li>
//         <li className="nav-item"><a href="#">Sign in</a></li>
//         <li className="nav-item"><a href="#">Log in</a></li>
//     </ul>
// </nav >