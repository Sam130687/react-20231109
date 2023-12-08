export const selectUserModule = (state) => state.users;
export const selectUserById = (state, id) => selectUserModule(state).entities[id];