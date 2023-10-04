import React, { useState } from "react";
import "./Navbar.css";
import logo_temp from "./images/logo_temp.png";
import iconHeart from "./images/Heart.svg";
import iconKitchen from "./images/kitchen.svg";
import iconCalendar from "./images/calendar.svg";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { BsCupHotFill } from 'react-icons/bs';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo_temp} alt="logo_zerowastegourmet" />

                    {/* <img src={logo_temp} alt="logo_zerowastegourmet" width="150" /> */}
                </a>

                <a
                    role="button"
                    className={`navbar-burger ${isActive ? "is-active" : ""}`}
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

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <a className="navbar-item">
                        <BsFillSuitHeartFill />  Favorite
                    </a>

                    <a className="navbar-item">
                        <BsCupHotFill />  My Kitchen
                    </a>

                    <a className="navbar-item">
                        <BsFillCalendar2CheckFill />  Weekly Plan
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button"><strong>Sign up</strong></a>
                            <a className="button">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}


export default Navbar;