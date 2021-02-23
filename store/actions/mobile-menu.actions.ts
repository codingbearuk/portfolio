import Action from "./action";

type actionType = "on" | "off";

export const mobileMenuSwitch = (type: actionType): Action => ({
  type: "switch-mobile-menu",
  payload: type === "on" ? true : false,
});
