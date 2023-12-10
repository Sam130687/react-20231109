import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get_users"
import { REQUEST_STATUSES } from "../../../constants/request-statuses";

export const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.idle,
    },
    extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc, user) => {
            acc[user.id] = user;

            return acc;
        }, {});
        state.ids = payload.map(({ id }) => id);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
})