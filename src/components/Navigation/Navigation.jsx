import { NavLink } from "react-router-dom";
import clsx from "clsx";

import Logo from "../Logo/Logo";

import css from "./Navigation.module.css";

const generateActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Logo />
      <ul className={css.navList}>
        <li>
          <NavLink className={generateActiveClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={generateActiveClass} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
