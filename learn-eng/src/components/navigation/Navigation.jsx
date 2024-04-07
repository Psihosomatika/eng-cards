import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo/Logo";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigationFixed">
      <div className="navigation">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="AppName">Vocabulary</h1>
        <div className="navBarMenu">
          <Link to="/newword"> Новое слово </Link>
          <Link to="/main"> Играть в карточки </Link>
        </div>
        <ul className="NavForms">
          <li>
            <Link to="/loginform"> Войти </Link>
          </li>
          <li>
            <Link to="/registerform">Зарегистироваться</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
