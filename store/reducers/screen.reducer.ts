import Action from "../actions/action";

const initialState = {
  device: "mobile",
  scrolled: false,
  scrollValue: 0,
};

type State = typeof initialState;

const screen = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "set-device-type":
      const type: string = action.payload;
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
