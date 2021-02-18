import Action from "../actions/action";

export default interface Reducer {
  (state: any, action: Action): any;
}
