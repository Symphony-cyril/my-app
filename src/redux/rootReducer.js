import { combineReducers } from "redux";
import catReducer from "./catReducer";

//redux
const rootReducer = combineReducers({
  cat: catReducer,
});

export default rootReducer;
