import Action from "./action";

type actionType = "on" | "off";

export const pageLoadingSwitch = (type: actionType): Action => ({
  type: "switch-page-loading",
  payload: type === "on" ? true : false,
});
