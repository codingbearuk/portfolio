import Action from "../actions/action";

const initialState: boolean = true;

const pageLoading = (state = initialState, action: Action) => {
  switch (action.type) {
    case "switch-page-loading":
      const switcher: boolean = action.payload;
      state = switcher;
      return state;
    default:
      return state;
  }
};

export default pageLoading;
