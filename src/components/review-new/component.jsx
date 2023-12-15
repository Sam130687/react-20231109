import { useCreateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "../review-form/component";

const DEFAULT_FORM_VALUE = {
  userId: null,
  name: "",
  text: "",
  rating: 5,
};

const counter = {
  step: 0.5,
  min: 1,
  max: 5
};

export const ReviewNew = ({restaurantId}) => {
  const [createReview, result] = useCreateReviewMutation();

  return (
    <ReviewForm
      review={DEFAULT_FORM_VALUE}
      objectId={restaurantId}
      onSaveClick={createReview}
      counter={counter}
    />
  );
};