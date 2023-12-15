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