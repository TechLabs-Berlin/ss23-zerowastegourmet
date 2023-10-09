import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css'
import logo from "../images/logo.png";
import iconHeart from "../images/heart.png";
import iconKitchen from "../images/kitchen.png";
import iconCalendar from "../images/calendar.png";
import { LoginForm } from "./LoginForm";
import { Signup } from "./Signup";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import './Navbar.css';

export function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img className="navbar-item-logo" src={logo} alt="logo_zerowastegourmet" />
                    <h2 className="has-text-weight-bold is-size-5" style={{ paddingLeft: "20px", fontStyle: "italic" }}>ZeroWasteGourmet</h2>
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
                <div className="navbar-end has-text-centered my-0">
                    <a className="navbar-item">
                        <img className="navbar-icon-heart mr-1" src={iconHeart} alt="Heart" />
                        <p className="my-1">Favorite</p>
                    </a>

                    <a className="navbar-item">
                        <img className="navbar-icon mr-1" src={iconKitchen} alt="Kitchen" />
                        <p className="my-1">Kitchen</p>
                    </a>

                    <a className="navbar-item">
                        <img className="navbar-icon mr-1" src={iconCalendar} alt="Calendar" />
                        <p className="my-1">Weekly Plan</p>
                    </a>

                    <div className="navbar-item">
                        <div className="buttons">
                            <a ><Signup /></a>
                            <a ><LoginForm /></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

// export default Navbar;