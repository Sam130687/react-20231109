import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewById } from "../../restaurants/selectors";

function contains(where, what){
  for(var i=0; i<what.length; i++){
      if(where.indexOf(what[i]) == -1) return false;
  }
  return true;
}

export const getReviews = createAsyncThunk(
  "review/getReviews",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Empty reviews list");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      contains(
        selectRestaurantReviewById(getState(), restaurantId),
        selectReviewIds(getState(), restaurantId)
      )
    },
  }
);
