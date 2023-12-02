import styles from "./styles.module.css";
import classnames from 'classnames';

export const Counter = ({count=0, step=1, onCounterClick, min=0, max=5, className = {}}) => {
    return (
        <div className={classnames(className.root, styles.root)}>
            <button
                className={classnames(className.action, styles.action)}
                onClick={() => onCounterClick(count > min ? count - step : min )
            }>-</button>
            {count}
            <button
                className={classnames(className.action, styles.action)}
                onClick={() => onCounterClick(count < max ? count + step : max )
            }>+</button>
        </div>
    )
}