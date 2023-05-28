import {
  ADD_NEW_TOLL,
  UPDATE_TOLL_ON_FILTER,
} from "../contants/tollsManagementContants";

export const tollsManagementReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_TOLL: {
      return [...state, action.payload];
    }

    case UPDATE_TOLL_ON_FILTER: {
      return action.payload;
    }

    default:
      return state;
  }
};
