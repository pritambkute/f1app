import React from "react";
import './Header.css'

function Header() {
  return (
    <div className="header__container">
      <img className="header__image" src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png" alt="Formula One" />
      <div className="header__text">Formula One Champions</div>
    </div>
  );
}

export default Header;
