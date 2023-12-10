import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from '../../../constants/request-statuses';
import { getDishes } from "./thunks/get_dishes";

export const DishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.idle,
    },
    extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc, dish) => {
            acc[dish.id] = dish;

            return acc;
        }, {});
        state.ids = payload.map(({ id }) => id);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getDishes.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
})