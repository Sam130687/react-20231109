import styles from "./styles.module.css";
import classnames from 'classnames';
import { Button } from "../button/component";

export const Counter = ({count=0, step=1, onCounterClick, min=0, max=5, className = {}}) => {
    return (
        <div className={classnames(className.root, styles.root)}>
            <Button
                onClick={() => onCounterClick(count > min ? count - step : min )}
                disabled={count <= min}
            >-</Button>
            {count}
            <Button
                onClick={() => onCounterClick(count < max ? count + step : max )}
                disabled={count >= max}
            >+</Button>
        </div>
    )
}