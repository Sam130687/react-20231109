import styles from './styles.module.css';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";

export const Tab = ({restaurant}) => {
    const restaurantId = restaurant.id;
    return (
        <NavLink
            to={`/restaurants/${restaurantId}`}
            className={({ isActive }) =>
            classNames(styles.link, {
              [styles.active]: isActive,
            })}
        >{restaurant.name}</NavLink>)
}