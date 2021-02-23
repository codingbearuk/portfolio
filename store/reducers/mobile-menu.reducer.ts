import Reducer from "./reducer";

const initialState: boolean = false;

const mobileMenu: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "switch-mobile-menu":
      const switcher: boolean = action.payload;
      state = switcher;
      return state;
    default:
      return state;
  }
};

export default mobileMenu;
