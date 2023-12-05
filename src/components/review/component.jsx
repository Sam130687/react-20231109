import styles from "./styles.module.css";
import { Counter } from "../counter/component";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/features/reviews/selectors";
import { selectUserById } from "../../redux/features/users/selectors"

export const Review = ({id}) => {
    const review = useSelector((state) => selectReviewById(state, id));
    const user = useSelector((state) => selectUserById(state, review.userId));

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
                value={user.name}
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