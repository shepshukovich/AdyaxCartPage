import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import { addItemReducer } from "./components/AddItem/action.js";
import { itemReducer } from "./components/item/action.js";

 const rootReducer = combineReducers({
	addItem: addItemReducer,
	item: itemReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	 compose(
		 applyMiddleware(promiseMiddleware),
		 typeof window === "object" &&
		 typeof window.devToolsExtension !== "undefined"
			 ? window.devToolsExtension()
			 : f => f
	 ))
export const persistor = persistStore(store)
