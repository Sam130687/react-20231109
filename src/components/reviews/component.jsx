import { ReviewForm } from "../review-from/component"
import { Review } from "../review/component"
import styles from "./styles.module.css";
import { useGetReviewsQuery } from "../../redux/services/api";

export const Reviews = ({restaurant}) => {
    const {data, isFetching} = useGetReviewsQuery(restaurant.id);

    if (isFetching ) {
        return "Загрузка отзывов";
    }

    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>
            {data.map((review) =>
                <Review
                    review = {review}
                />
            )}
            <ReviewForm restaurantId={restaurant.id}/>
        </div>
    )
}