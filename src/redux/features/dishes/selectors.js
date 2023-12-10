export const selectDisheModule = (state) => state.dishes;
export const selectDisheIds = (state) => selectDisheModule(state).ids;
export const selectDishById = (state, id) => selectDisheModule(state).entities[id];