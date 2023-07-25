import { combineReducers } from "redux";
import tasksReducer from "./tasks/reducer";
import { authReducer } from "./auth";

export default combineReducers({
    auth: authReducer,
    tasks: tasksReducer
});