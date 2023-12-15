import styles from './styles.module.css';
import classNames from 'classnames';
import { NavLink, Outlet } from "react-router-dom";

export const Restaurant = ({restaurant}) => {
    const restaurantId = restaurant.id;
    return (
        <div id={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <NavLink
                to={`/restaurants/${restaurantId}/menu`}
                className={({ isActive }) =>
                classNames(styles.link, {
                [styles.active]: isActive,
            })}
            >Menu</NavLink>
            <NavLink
                to={`/restaurants/${restaurantId}/reviews`}
                className={({ isActive }) =>
                classNames(styles.link, {
                [styles.active]: isActive,
                })}
            >Reviews</NavLink>
            <Outlet/>
        </div>
    )
}