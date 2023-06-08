import {
  ADD_NEW_TOLL_ENTRY_ENTRY,
  RESET_TOLL_ENTRY,
} from "../contants/tollEntryManagementConstants";

export const addNewTollEntryAction =
  (tollEntry) => async (dispatch, getState) => {
    dispatch({
      type: ADD_NEW_TOLL_ENTRY_ENTRY,
      payload: tollEntry,
    });
  };

export const resetTollEntryListAction =
  (tollEntryList) => async (dispatch, getState) => {
    dispatch({
      type: RESET_TOLL_ENTRY,
      payload: tollEntryList,
    });
  };
