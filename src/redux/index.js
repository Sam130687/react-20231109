import { configureStore } from "@reduxjs/toolkit";
import { RestaurantsSlice } from "./features/restaurants";
import { DishesSlice } from "./features/dishes";
import { UsersSlice } from "./features/users";
import { ReviewsSlice } from "./features/reviews";

const store = configureStore({
    reducer: {
        restaurants: RestaurantsSlice.reducer,
        dishes: DishesSlice.reducer,
        reviews: ReviewsSlice.reducer,
        users: UsersSlice.reducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});

export default store;

console.log(store.getState());