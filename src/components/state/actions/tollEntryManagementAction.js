import {
  ADD_NEW_TOLL_ENTRY_ENTRY,
  UPDATE_TOLL_ENTRY_ON_FILTER
} from "../contants/tollEntryManagementConstants";

export const addNewTollEntryAction = (tollEntry) => async (dispatch, getState) => {
  dispatch({
    type: ADD_NEW_TOLL_ENTRY_ENTRY,
    payload: tollEntry
  })
}

export const updateTollEntryListAction = (tollEntryList) => async (dispatch, getState) => {
  dispatch({
    type: UPDATE_TOLL_ENTRY_ON_FILTER,
    payload: tollEntryList
  })
}