import Action from "../actions/action";

const initialState: boolean = false;

const mobileMenu = (state = initialState, action: Action) => {
  console.log(action);
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
