import styles from "./styles.module.css";
import { Counter } from "../counter/component";
import { useGetUsersQuery, useUpdateReviewMutation } from "../../redux/services/api";
import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
      case "setName":
        return {
          ...state,
          name: action.payload,
        };
      case "setRating":
        return { ...state, rating: action.payload };
      default:
        return state;
    }
  };

export const Review = ({review}) => {
    const {data, isFetching} = useGetUsersQuery(undefined);
    const [updateReview, result] = useUpdateReviewMutation();
    const [formValue, dispatch] = useReducer(reducer, review);

    if (isFetching ) {
        return "Загрузка пользователей";
    }

    const reviewId = review.id;
    return (
        <div className={styles.root}>
            <div className={styles.lableGroup}>
                <label className={styles.labelElement} htmlFor="rating">Rating</label>
                <Counter
                    id="rating"
                    count={formValue.rating}
                    step={1}
                    onCounterClick={(rate) => dispatch({
                        type: "setRating",
                        payload: rate })
                    }
                    min={1}
                    max={5}
                />
            </div>
            <div className={styles.lableGroup}>
            <label className={styles.labelElement} htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                value={ data?.find(({id}) => id === review.userId).name }
            />
            </div>
            <div className={styles.lableGroup}>
            <label className={styles.labelElement} htmlFor="text">Text</label>
            <textarea
                id="text"
                type="text"
                value={formValue.text}
                onChange={(event) =>
                    dispatch({ type: "setText", payload: event.target.value })
                }
            />
            </div>
            <button onClick={() => updateReview({
                    reviewId,
                    newReview: {
                        userId: review.userId,
                        text: formValue.text,
                        rating: formValue.rating} })}>
                Save {reviewId}
            </button>
        </div>
    )
}