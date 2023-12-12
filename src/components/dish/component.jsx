import { Counter } from "../counter/component";
import { useState } from 'react';
import styles from "./styles.module.css";

export const Dish = ({dish}) => {
    const [count, setCounter] = useState(0);

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