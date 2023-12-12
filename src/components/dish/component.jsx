import { Counter } from "../counter/component";
import { useState } from 'react';
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/features/dishes/selectors";

export const Dish = ({id}) => {
    const [count, setCounter] = useState(0);
    const dish = useSelector((state) => selectDishById(state, id));

    if (!dish){
        return null;
    };

    return (
        <div className={styles.root}>
            <div className={styles.lableGroup}>
                <label className={styles.labelElement} htmlFor="rating">{dish.name}</label>
                <Counter
                    count={count}
                    step={1}
                    onCounterClick={setCounter}
                    min={0}
                    max={5}
                />
            </div>
        </div>)
}