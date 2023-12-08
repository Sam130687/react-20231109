export const selectRestaurantModule = (state) => state.restaurants;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];