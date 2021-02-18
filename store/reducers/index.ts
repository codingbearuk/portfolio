import { combineReducers } from "redux";

// Reducers
import screen from "./screen.reducer";

const reducers = combineReducers({ screen });

export type State = ReturnType<typeof reducers>;
export default reducers;
