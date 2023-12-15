import { Review } from "../review/component"
import styles from "./styles.module.css";
import { useGetReviewsQuery } from "../../redux/services/api";
import { ReviewNew } from "../review-new/component";

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
            <ReviewNew restaurantId={restaurant.id}/>
        </div>
    )
}