import { ADD_NEW_TOLL, RESET_TOLLS } from "../constants/tollsManagementContants";

export const tollsManagementReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_TOLL: {
      return [...state, action.payload];
    }

    case RESET_TOLLS: {
      return action.payload;
    }

    default:
      return state;
  }
};
