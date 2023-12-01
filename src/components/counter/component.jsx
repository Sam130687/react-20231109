import styles from "./styles.module.css";

export const Counter = ({count=0, step=1, onCounterClick, min=0, max=5}) => {
    return (
        <div className={styles.root}>
            <button  className={styles.action}  onClick={
                () => onCounterClick(count > min ? count - step : min )
            }>-</button>
            {count}
            <button  className={styles.action}  onClick={
                () => onCounterClick(count < max ? count + step : max )
            }>+</button>
        </div>
    )
}