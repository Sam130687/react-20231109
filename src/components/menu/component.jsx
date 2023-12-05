import { Dish } from "../dish/component"
import styles from "./styles.module.css";

export const Menu = ({dishIds}) => {
    return (
        <div className={styles.root}>
            <h3>Меню</h3>
            {dishIds.map((dishId) =>
                <Dish
                    id = {dishId}
                />
            )}
        </div>
    )
}