import { Dish } from "../dish/component"
import styles from "./styles.module.css";
import { useGetDishesQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";

export const Menu = () => {
    const { restaurantId } = useParams();
    const {data, isFetching} = useGetDishesQuery(restaurantId);

    if (isFetching) {
        return <div>Загрузка меню</div>;
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