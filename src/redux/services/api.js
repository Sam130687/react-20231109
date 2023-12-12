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
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Review", id: restaurantId },
      ],
    }),
    updateReview: builder.mutation({
        query: ({ reviewId, newReview }) => ({
          url: `review/${reviewId}`,
          method: "PATCH",
          body: newReview,
        }),
        invalidatesTags: (result, _, { reviewId }) => [
          { type: "Review", id: reviewId },
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