import React, { useState } from "react";
import 'bulma/css/bulma.min.css'
import logo from "../images/logo.png";
import iconHeart from "../images/heart.png";
import iconKitchen from "../images/kitchen.png";
import iconCalendar from "../images/calendar.png";
import LoginForm from "./LoginForm";
import './Navbar.css';


export function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand m-2">
                <a className="navbar-item" href="/">
                    <img src={logo} alt="logo_zerowastegourmet" width="161" height="158" />
                </a>

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
                <div className="navbar-end is-flex">
                    <a className="navbar-item has-text-success">
                        <img className="navbar-icon-heart mr-1" src={iconHeart} alt="Heart" />
                        Favorite
                    </a>

                    <a className="navbar-item has-text-success">
                        <img className="navbar-icon mr-1" src={iconKitchen} alt="Kitchen" />
                        My Kitchen
                    </a>

                    <a className="navbar-item has-text-success">
                        <img className="navbar-icon mr-1" src={iconCalendar} alt="Calendar" />
                        Weekly Plan
                    </a>


                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button" >Sign up</a>
                            <a ><LoginForm /></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}