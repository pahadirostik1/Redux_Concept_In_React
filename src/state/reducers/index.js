// reducers.js
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

// Combine reducers (even if you only have one for now)
const reducers = combineReducers({
  amount: amountReducer // Can add more reducers here
});

export default reducers;
