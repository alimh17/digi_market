const init = {
  allProduct: [],
  brands: [],
  colors: [],
};

export const mobilesReducer = (state = init, action) => {
  switch (action.type) {
    case "INITIAL_MOBILE":
      return action.payload;
    case "SORT_BY_SELL":
      return action.payload;
    case "SORT_BY_VIEW":
      return action.payload;
    case "SORT_BY_CHEAPEST":
      return action.payload;
    case "SORT_BY_BRANDS":
      return action.payload;
    case "SORT_BY_COLORS":
      return action.payload;
    default:
      return state;
  }
};
