import { ReviewForm } from "../review-from/component"
import { Review } from "../review/component"
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/features/users/thunks/get_users";
import { getReviews } from "../../redux/features/reviews/thunks/get_reviews";
import { selectRestaurantReviewById } from "../../redux/features/restaurants/selectors";

export const Reviews = ({restaurantId}) => {
    const reviews = useSelector((state) => selectRestaurantReviewById(state, restaurantId));

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getReviews(restaurantId));
      dispatch(getUsers());
    }, []);

    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>
            {reviews.map((reviewId) =>
                <Review id = {reviewId} />
            )}
            <ReviewForm/>
        </div>
    )
}