import { Counter } from "../counter/component";
import { useState } from 'react';
import styles from "./styles.module.css";
import { useOrder } from "../order/hook";

export const Dish = ({dish}) => {
    const [count, setCounter] = useState(0);
    const { forms, setAddress } = useOrder();

    if (!dish) {
        return null;
    }

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
                    className={{action: forms.theme === "light" ? styles.blackButton : styles.lightButton}}/>
            </div>
        </div>)
}