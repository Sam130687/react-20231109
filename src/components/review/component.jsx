import styles from "./styles.module.css";
import { Counter } from "../counter/component";

export const Review = ({review}) => {
    if (!review) {
        return null;
    }

    return (
        <div className={styles.root}>
            <div className={styles.lableGroup}>
                <label className={styles.labelElement} htmlFor="rating">Rating</label>
                <Counter
                    id="rating"
                    count={review.rating}
                    step={1}
                    min={1}
                    max={5}
                />
            </div>
            <div className={styles.lableGroup}>
            <label className={styles.labelElement} htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                value={review.user}
            />
            </div>
            <div className={styles.lableGroup}>
            <label className={styles.labelElement} htmlFor="text">Text</label>
            <textarea
                id="text"
                type="text"
                value={review.text}
            />
            </div>
        </div>
    )
}