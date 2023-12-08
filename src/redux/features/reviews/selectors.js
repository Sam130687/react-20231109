export const selectReviewModule = (state) => state.reviews;
export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];