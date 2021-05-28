import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__header">
      <a className="logo header__logo opacity" href="../../public/index.html">
        <img className="logo__image" src={logo} alt="Логотип" />
      </a>{" "}
    </header>
  );
}

export default Header;
