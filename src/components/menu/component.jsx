import { useDispatch, useSelector } from "react-redux";
import { Dish } from "../dish/component"
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getDishes } from "../../redux/features/dishes/thunks/get_dishes";
import { selectRestaurantMenuById } from "../../redux/features/restaurants/selectors";

export const Menu = ({restaurantId}) => {
    const dispatch = useDispatch();

    const menu = useSelector((state) => selectRestaurantMenuById(state, restaurantId));

    useEffect(() => {
      dispatch(getDishes(restaurantId));
    }, []);

    return (
        <div className={styles.root}>
            <h3>Меню</h3>
            {menu.map((dishId) =>
                <Dish
                    id = {dishId}
                />
            )}
        </div>
    )
}