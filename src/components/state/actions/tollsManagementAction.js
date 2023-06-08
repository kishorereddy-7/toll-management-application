import { ADD_NEW_TOLL, RESET_TOLLS } from "../contants/tollsManagementContants";

export const addTollsManagementAction = (toll) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_TOLL,
    payload: toll,
  });
};

export const resetTollsManagementAction = (tolls) => async (dispatch) => {
  dispatch({
    type: RESET_TOLLS,
    payload: tolls,
  });
};
