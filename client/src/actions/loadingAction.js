export const showLoadingAction = (id) => (dispatch) => {
  dispatch({ type: "SHOW_LOADING", payload: true });
};
export const hideLoadingAction = () => (dispatch) => {
  dispatch({ type: "HIDE_LOADING", payload: false });
};
