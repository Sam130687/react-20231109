import { Review } from "../review/component"
import styles from "./styles.module.css";
import { useGetReviewsQuery } from "../../redux/services/api";
import { ReviewNew } from "../review-new/component";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const { restaurantId } = useParams();
    const {data, isFetching} = useGetReviewsQuery(restaurantId);

    if (isFetching ) {
        return <div>Загрузка отзывов</div>;
    }

    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>
            {data.map((review) =>
                <Review
                    review = {review}
                />
            )}
            <ReviewNew restaurantId={restaurantId}/>
        </div>
    )
}