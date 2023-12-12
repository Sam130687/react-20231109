import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDisheIds } from "../selectors";
import { selectRestaurantMenuById } from "../../restaurants/selectors";

function contains(where, what){
  for(var i=0; i<what.length; i++){
      if(where.indexOf(what[i]) == -1) return false;
  }
  return true;
}

export const getDishes = createAsyncThunk(
  "dish/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Empty dish list");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      contains(selectRestaurantMenuById(getState(), restaurantId),
               selectDisheIds(getState(), restaurantId)
              )
    },
  }
);
