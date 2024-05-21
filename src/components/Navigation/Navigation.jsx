// src/components/Navigation/Navigation.jsx
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={css.container}>
      <nav className={css.navigation}>
        <NavLink className="link" to="/" end>
          Home
        </NavLink>
        <NavLink className="link" to="/catalog">
          Catalog
        </NavLink>
        <NavLink className="link" to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
