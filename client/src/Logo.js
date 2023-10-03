/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
    className,
    iconBranch = "https://cdn.animaapp.com/projects/6519371fc7f7d75d0d661f4d/releases/6519381acdfbbe8c78008698/img/---icon--branch-1--1@2x.png",
}) => {
    return (
        <div className={`LOGO ${className}`}>
            <div className="overlap-group">
                <div className="text-wrapper">ZeroWasteGourmet</div>
                <img
                    className="icon-carrot"
                    alt="Icon carrot"
                    src="https://cdn.animaapp.com/projects/6519371fc7f7d75d0d661f4d/releases/6519381acdfbbe8c78008698/img/---icon--carrot-@2x.png"
                />
                <img
                    className="icon-apple"
                    alt="Icon apple"
                    src="https://cdn.animaapp.com/projects/6519371fc7f7d75d0d661f4d/releases/6519381acdfbbe8c78008698/img/---icon--apple-@2x.png"
                />
                <img className="icon-branch" alt="Icon branch" src={iconBranch} />
            </div>
        </div>
    );
};

Logo.propTypes = {
    iconBranch: PropTypes.string,
};
