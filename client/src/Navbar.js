import React, { useState } from "react";
import logo_temp from "./images/logo_temp.png";
import iconHeart from "./images/Heart.svg";
import iconKitchen from "./images/kitchen.svg";
import iconCalendar from "./images/calendar.svg";
import 'bulma/css/bulma.min.css'
import LoginForm from "./LoginForm";
import SignupForm from "./Signup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/auth.context";

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item " to="/">
                    <img src="https://cdn.animaapp.com/projects/6519371fc7f7d75d0d661f4d/releases/6519381acdfbbe8c78008698/img/---icon--branch-1--1@2x.png" alt="logo_zerowastegourmet" className="mr-2" />

                    <img src={logo_temp} alt="logo_zerowastegourmet" width="150" />
                </Link>

                <a
                    role="button"
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={toggleMenu}
                    data-target="navbarBasicExample"

                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <a className="navbar-item">
                        <img className="navbar-icon-heart mr-1" src={iconHeart} alt="Heart" />
                        Favorite
                    </a>

                    <a className="navbar-item">
                        <img className="navbar-icon mr-1" src={iconKitchen} alt="Kitchen" />
                        My Kitchen
                    </a>

                    <a className="navbar-item">
                        <img className="navbar-icon mr-1" src={iconCalendar} alt="Calendar" />
                        Weekly Plan
                    </a>
                    {isLoggedIn && (
                        <div className="navbar-item">
                            <Link className="button" to="/userprofile">
                                Profile
                            </Link>

                            <button className="button ml-3" onClick={logOutUser}>Logout</button>
                        </div>

                    )}

                    {!isLoggedIn && (
                        <div className="navbar-item">
                            <div className="buttons">
                                <a><SignupForm /></a>
                                <a><LoginForm /></a>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </nav >
    );
}


export default Navbar;