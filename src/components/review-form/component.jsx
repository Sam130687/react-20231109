import { useReducer } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.css";
import { useGetUsersQuery } from "../../redux/services/api";

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const ReviewForm = ({review, objectId, onSaveClick, counter}) => {
  const [formValue, dispatch] = useReducer(reducer, review);
  const {data, isFetching} = useGetUsersQuery(undefined);

  return (
    <div className={styles.root}>
      <div className={styles.lableGroup}>
        <label className={styles.labelElement} htmlFor="rating">Rating</label>
        <Counter
            id="rating"
            count={formValue.rating}
            step={counter.step}
            onCounterClick={(rate) => dispatch({
                type: "setRating",
                payload: rate })
            }
            min={counter.min}
            max={counter.max}
        />
      </div>
      <div className={styles.lableGroup}>
        <label className={styles.labelElement} htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formValue.userId ? data?.find(({id}) => id === review.userId).name : formValue.name}
          disabled={formValue.userId}
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
      <button onClick={() => onSaveClick({
          objectId,
          newReview: {
            userId: formValue.userId ? formValue.userId : data?.find(({name}) => name === formValue.name).id,
            text: formValue.text,
            rating: formValue.rating} }
          )}>
        Сохранить
      </button>
    </div>
  );
};