import screen from "./screen.actions";
import { setPosition } from "./index-page-positions.actions";

export const screenAction = screen;
export const indexPagePositionsAction = setPosition;

export default {
  screen,
  indexPagePositionsAction,
};
