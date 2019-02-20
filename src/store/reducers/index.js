import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./erros";

const rootReducer = combineReducers({
  currentUser,
  errors
});

export default rootReducer