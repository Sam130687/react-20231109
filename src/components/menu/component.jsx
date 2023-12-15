import { Dish } from "../dish/component"
import styles from "./styles.module.css";
import { useGetDishesQuery } from "../../redux/services/api";

export const Menu = ({restaurant}) => {
    console.log(restaurant);
    const {data, isFetching} = useGetDishesQuery(restaurant.id);

    if (isFetching) {
        return "Загрузка меню";
    }

    return (
        <div className={styles.root}>
            <h3>Меню</h3>
            {data.map((dish) =>
                <Dish
                    dish = {dish}
                />
            )}
        </div>
    )
}