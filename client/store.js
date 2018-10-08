import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise";

import { addItemReducer } from "./components/AddItem/action.js";

export const rootReducer = combineReducers({
	addItem: addItemReducer
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(promiseMiddleware),
		typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
			? window.devToolsExtension()
			: f => f
	)
);

export default store;
