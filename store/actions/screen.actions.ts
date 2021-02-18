import Action from "./action";

type Type = "set-device-type" | "set-scroll-value" | "set-page-scrolled";
type Payload = string | number | boolean;

const screenActions = (type: Type, payload: Payload): Action => ({
  type,
  payload,
});

export default screenActions;
