import { ReviewForm } from "../review-from/component"
import { Review } from "../review/component"
import styles from "./styles.module.css";

export const Reviews = ({reviews}) => {
    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>
            {reviews.map((review) =>
                <Review review = {review} />
            )}
            <ReviewForm/>
        </div>
    )
}