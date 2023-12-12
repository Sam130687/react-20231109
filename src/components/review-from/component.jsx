import { useReducer } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.css";
import { useCreateReviewMutation, useGetUsersQuery } from "../../redux/services/api";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
        text: DEFAULT_FORM_VALUE.text,
        rating: DEFAULT_FORM_VALUE.rating,
      };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const ReviewForm = ({restaurantId}) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  const [createReview, result] = useCreateReviewMutation();
  const {data, isFetching} = useGetUsersQuery(undefined);

  return (
    <div className={styles.root}>
      <div className={styles.lableGroup}>
        <label className={styles.labelElement} htmlFor="rating">Rating</label>
        <Counter
            id="rating"
            count={formValue.rating}
            step={0.5}
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
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
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
      <button onClick={() => createReview({
          restaurantId,
          newReview: {
            userId: data?.find(({name}) => name === formValue.name).id,
            text: formValue.text,
            rating: formValue.rating} })}>
        Save {restaurantId}
      </button>
    </div>
  );
};