import Action from "../actions/action";

interface State {
  device: "mobile" | "desktop";
  scrolled: boolean;
  scrollValue: number;
}
const initialState: State = {
  device: "mobile",
  scrolled: false,
  scrollValue: 0,
};

const screen = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "set-device-type":
      const type: "mobile" | "desktop" = action.payload;
      state = { ...state, device: type };
      return state;
    case "set-scroll-value":
      const value: number = action.payload;
      state = { ...state, scrollValue: value };
      return state;
    case "set-page-scrolled":
      const scrolled: boolean = action.payload;
      state = { ...state, scrolled };
      return state;
    default:
      return state;
  }
};

export default screen;
