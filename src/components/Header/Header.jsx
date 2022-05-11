import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png"
        alt=""
      />
      <div className={s.loginBlock}>
        {" "}
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
