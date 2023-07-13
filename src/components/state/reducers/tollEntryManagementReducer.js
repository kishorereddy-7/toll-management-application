import {
  ADD_NEW_TOLL_ENTRY_ENTRY,
  RESET_TOLL_ENTRY,
} from "../constants/tollEntryManagementConstants";

export const tollEntryManagementReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_TOLL_ENTRY_ENTRY: {
      return [...state, action.payload];
    }

    case RESET_TOLL_ENTRY: {
      return action.payload;
    }

    default:
      return state;
  }
};
