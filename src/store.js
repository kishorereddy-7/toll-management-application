import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { tollEntryManagementReducer } from "./components/state/reducers/tollEntryManagementReducer";
import { tollsManagementReducer } from "./components/state/reducers/tollsManagementReducer";

const reducers = combineReducers({
  tollEntryList: tollEntryManagementReducer,
  tollsList: tollsManagementReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
