import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import MenuButton from "../UI/MenuButton/MenuButton";
import Search from "../UI/Seach/Search";

function Header() {
  return (
    <div className={styles.content}>
      <div className="logo">
        <img src={logo} alt="logo" width={150} />
      </div>
      <div className="search-block">
        <Search />
      </div>
      <div className={styles.menu}>
        <MenuButton className="menu__item">Портфель</MenuButton>
        <MenuButton className="menu__item">Акции</MenuButton>
        <MenuButton className="menu__item">Валюты</MenuButton>
        <MenuButton className="menu__item">Фонды</MenuButton>
        <MenuButton className="menu__item">Облигации</MenuButton>
        <MenuButton className="menu__item">Избранное</MenuButton>
      </div>
    </div>
  );
}

export default Header;
