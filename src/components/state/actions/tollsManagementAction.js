import { 
  ADD_NEW_TOLL,
  UPDATE_TOLL_ON_FILTER
} from "../contants/tollsManagementContants"

export const addTollsManagementAction = (toll) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_TOLL,
    payload: toll
  })
}

export const updateTollsManagementAction = (tolls) => async (dispatch) => {
  dispatch({
    type: UPDATE_TOLL_ON_FILTER,
    payload: tolls
  })
}