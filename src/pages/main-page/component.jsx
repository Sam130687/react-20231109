import styles from "./styles.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

  export const MainPage = () => {
    return (
      <div>
        <h3>Главная страница</h3>;
        <NavLink
          to="/restaurants"
          className={({ isActive }) =>
            classNames(styles.link, {
              [styles.active]: isActive,
            })
          }
        >
          Перейти к ресторанам
        </NavLink>
      </div>
    )
  };