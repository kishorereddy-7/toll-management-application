import {
  ADD_NEW_TOLL_ENTRY_ENTRY,
  UPDATE_TOLL_ENTRY_ON_FILTER,
} from "../contants/tollEntryManagementConstants";

export const tollEntryManagementReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_TOLL_ENTRY_ENTRY: {
      return [...state, action.payload];
    }

    case UPDATE_TOLL_ENTRY_ON_FILTER: {
      return {
        ...state,
        tollEntryList: action.payload,
      };
    }

    default:
      return state;
  }
};
