import { 
  ADD_NEW_TOLL,
  UPDATE_TOLL_ON_FILTER
} from "../contants/tollsManagementContants";

export const tollsManagementReducer = (state = { tollsList: [] }, action) => {
  switch(action.type) {
    case ADD_NEW_TOLL: {
      return {
        ...state,
        tollsList: state.tollsList.push(action.payload)
      }
    }

    case UPDATE_TOLL_ON_FILTER: {
      return {
        ...state,
        tollEntry: action.payload
      }
    }

    default: 
      return state
  }
};