import { ReviewForm } from "../review-from/component"
import { Review } from "../review/component"
import styles from "./styles.module.css";

export const Reviews = ({reviewIds}) => {
    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>
            {reviewIds.map((reviewId) =>
                <Review id = {reviewId} />
            )}
            <ReviewForm/>
        </div>
    )
}