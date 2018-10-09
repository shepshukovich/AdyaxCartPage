import { createActions, handleActions } from "redux-actions";

const defaultState = {
	title: 'Title',
	description: 'Description',
	cost: 25,
	render: [],
	id: 1
};

export const {setTitle, setDescription, setCost, setRenderSequence,
							remTitle, remDescription, remCost, remRenderSequence
						 } = createActions({
	"SET_TITLE": (title) => ({ title: title }),
	"SET_DESCRIPTION": (description) => ({ description: description }),
	"SET_COST": (cost) => ({ cost: cost }),
	"SET_RENDER_SEQUENCE": (render) => ({ newItem: {} }),

	"REM_TITLE": (title) => ({ title: title }),
	"REM_DESCRIPTION": (description) => ({ description: '' }),
	"REM_COST": (cost) => ({ cost: '' }),
	"REM_RENDER_SEQUENCE": (render) => ({ newItem: '' })
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
	},

	[setRenderSequence] (state, {payload: {newItem}}) {
		let id = state.id;
		let id2 = id + 1;
		state.id = id2;

		newItem.title = state.title;
		newItem.description = state.description;
		newItem.cost = state.cost;
		newItem.id = state.id;


		let itemArray = state.render;
		itemArray.push(newItem);
		return { ...state, render: itemArray };
	},

	[remTitle] (state, {payload: {title}}) {
		return { ...state, title: title };
	},
}, defaultState);
