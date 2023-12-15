import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
    }),
    getDishes: builder.query({
        query: (restaurantId) => ({
          url: "dishes",
          params: { restaurantId },
        })
      }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: "ALL" },
            { type: "Review", id: restaurantId }
          ),
    }),
    createReview: builder.mutation({
      query: ({ objectId, newReview }) => ({
        url: `review/${objectId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { objectId }) => [
        { type: "Review", id: objectId },
      ],
    }),
    updateReview: builder.mutation({
        query: ({ objectId, newReview }) => ({
          url: `review/${objectId}`,
          method: "PATCH",
          body: newReview,
        }),
        invalidatesTags: (result, _, { objectId }) => [
          { type: "Review", id: objectId },
        ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  useGetReviewsQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = api;