import { useUpdateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "../review-form/component";

const counter = {
    step: 1,
    min: 1,
    max: 5
  };

export const Review = ({review}) => {
    const [updateReview, result] = useUpdateReviewMutation();

    return (
        <ReviewForm
          review={review}
          objectId={review.id}
          onSaveClick={updateReview}
          counter={counter}
        />
    );
}

/*return (
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
    ) */