import { combineReducers } from "redux";

// Reducers
import screen from "./screen.reducer";
import mobileMenu from "./mobile-menu.reducer";

const reducers = combineReducers({ screen, mobileMenu });

export type State = ReturnType<typeof reducers>;
export default reducers;
