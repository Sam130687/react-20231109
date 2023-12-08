export const selectDisheModule = (state) => state.dishes;
export const selectDishById = (state, id) => selectDisheModule(state).entities[id];