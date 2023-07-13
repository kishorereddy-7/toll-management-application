import { HIDE_TOAST, SHOW_TOAST } from "../constants/toastDetailsConstants";

export const showToastAction = (details) => async (dispatch) => {
  dispatch({
    type: SHOW_TOAST,
    payload: details,
  });
};

export const hideToastAction = () => async (dispatch) => {
  dispatch({
    type: HIDE_TOAST,
  });
};
