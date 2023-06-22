import {
  ADD_NEW_TOLL_ENTRY_ENTRY,
  RESET_TOLL_ENTRY,
} from "../contants/tollEntryManagementConstants";

export const addNewTollEntryAction = (tollEntry) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_TOLL_ENTRY_ENTRY,
    payload: tollEntry,
  });
};

export const resetTollEntryListAction = (tollEntryList) => async (dispatch) => {
  dispatch({
    type: RESET_TOLL_ENTRY,
    payload: tollEntryList,
  });
};
