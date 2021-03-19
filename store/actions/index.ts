import screen from "./screen.actions";
import { setPosition } from "./index-page-positions.actions";
import { pageLoadingSwitch } from "./page-loading.action";

export const screenAction = screen;
export const indexPagePositionsAction = setPosition;
export const pageLoadingSwitchAction = pageLoadingSwitch;

export default {
  screen,
  indexPagePositionsAction,
  pageLoadingSwitch,
};
