import { combineReducers } from "redux";

// Reducers
import screen from "./screen.reducer";
import mobileMenu from "./mobile-menu.reducer";
import indexPagePositions from "./index-page-positions.reducer";
import pageLoading from "./page-loading.reducer";

const reducers = combineReducers({
  screen,
  mobileMenu,
  indexPagePositions,
  pageLoading,
});

export type State = ReturnType<typeof reducers>;
export default reducers;
