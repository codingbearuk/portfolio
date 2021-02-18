import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const store = createStore(reducers, composeWithDevTools());

export type Store = typeof store;
export default store;
