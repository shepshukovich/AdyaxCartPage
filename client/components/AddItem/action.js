import { createActions, handleActions } from "redux-actions";

const defaultState = {
	title: "213",
	description: '',
	cost: 0
};

export const {setTitle, setDescription, setCost, setEndDate} = createActions({
	"SET_TITLE": (title) => ({ title: title }),
	"SET_DESCRIPTION": (description) => ({ description: description }),
	"SET_COST": (cost) => ({ cost: cost })
});

export const addItemReducer = handleActions({
	[setTitle] (state, {payload: {title}}) {
		return { ...state, title: title };
	},
	[setDescription] (state, {payload: {description}}) {
		return { ...state, description: description };
	},
	[setCost] (state, {payload: {cost}}) {
		return { ...state, cost: cost };
	}
}, defaultState);
