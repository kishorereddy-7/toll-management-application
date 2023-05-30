import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { tollEntryManagementReducer } from "./components/state/reducers/tollEntryManagementReducer";
import { tollsManagementReducer } from "./components/state/reducers/tollsManagementReducer";
import { toastDetailsReducer } from "./components/state/reducers/toastDetailsReducer";

const reducers = combineReducers({
  tollEntryList: tollEntryManagementReducer,
  tollsList: tollsManagementReducer,
  toastDetails: toastDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
