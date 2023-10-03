import React, { useState } from "react";
import "./Navbar.css";
import logo_temp from "./images/logo_temp.png";
import iconHeart from "./images/heart.svg";
import iconKitchen from "./images/kitchen.svg";
import iconCalendar from "./images/calendar.svg";

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="https://cdn.animaapp.com/projects/6519371fc7f7d75d0d661f4d/releases/6519381acdfbbe8c78008698/img/---icon--branch-1--1@2x.png" alt="logo_zerowastegourmet" />

                    {/* <img src={logo_temp} alt="logo_zerowastegourmet" width="150" /> */}
                </a>

                <a
                    role="button"
                    className={`navbar-burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={toggleMenu}
                // data-target="navbarBasic"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                {/* <div className="navbar-start"> */}
                <a className="navbar-item">
                    <img className="navbar-icon-heart" src={iconHeart} alt="Heart" />
                    Favorite
                </a>

                <a className="navbar-item">
                    <img className="navbar-icon" src={iconKitchen} alt="Kitchen" />
                    My Kitchen
                </a>

                <a className="navbar-item">
                    <img className="navbar-icon" src={iconCalendar} alt="Calendar" />
                    Weekly Plan
                </a>
            </div>

            {/* <div className="navbar-end"> */}
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button">Sign up</a>
                    <a className="button">Log in</a>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </nav >
    );
}


export default Navbar;