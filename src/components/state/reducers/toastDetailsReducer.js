import { HIDE_TOAST, SHOW_TOAST } from "../contants/toastDetailsConstants";

export const toastDetailsReducer = (state, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return { ...action.payload, show: true };
    case HIDE_TOAST:
      return { show: false };
    default:
      return { show: false };
  }
};
