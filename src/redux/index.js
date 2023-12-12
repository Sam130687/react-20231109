import { configureStore } from "@reduxjs/toolkit";
import { RestaurantsSlice } from "./features/restaurants";
import { DishesSlice } from "./features/dishes";
import { UsersSlice } from "./features/users";
import { ReviewsSlice } from "./features/reviews";
import { api } from "./services/api";

const store = configureStore({
    reducer: {
        restaurants: RestaurantsSlice.reducer,
        dishes: DishesSlice.reducer,
        reviews: ReviewsSlice.reducer,
        users: UsersSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(api.middleware),
});

export default store;

console.log(store.getState());