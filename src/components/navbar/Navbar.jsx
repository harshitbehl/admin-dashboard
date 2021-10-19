import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <div className="navbar__logo">
            Admin Dashboard <br />
            <span>by Harshit Behl</span>
          </div>
        </div>
        <div className="navbar__right">Right</div>
      </div>
    </div>
  );
}

export default Navbar;
