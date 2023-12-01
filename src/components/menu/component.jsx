import { Dish } from "../dish/component"
import styles from "./styles.module.css";

export const Menu = ({dishes}) => {
    return (
        <div className={styles.root}>
            <h3>Меню</h3>
            {dishes.map((dish) =>
                <Dish
                    dish = {dish}
                />
            )}
        </div>
    )
}