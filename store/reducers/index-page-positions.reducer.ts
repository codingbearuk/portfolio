import Action from "../actions/action";

const initialState = {
  whoIAm: 0,
  mySkills: 0,
};
type State = typeof initialState;

const indexPagePositions = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "set-who-i-am-position":
      state = { ...state, whoIAm: action.payload };
      return state;
    case "set-my-skills-position":
      state = { ...state, mySkills: action.payload };
      return state;
    default:
      return state;
  }
};

export default indexPagePositions;
