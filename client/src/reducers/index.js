import { combineReducers } from "redux";
import authReducer from "./authReducer";
import activePageReducer from "./activePageReducer";

export default combineReducers({
  auth: authReducer,
  activePageObject: activePageReducer
});
