import Action from "../actions/action";

type ActionType = "set-who-i-am-position" | "set-my-skills-position";

export const setPosition = (type: ActionType, payload: number): Action => ({
  type,
  payload,
});
