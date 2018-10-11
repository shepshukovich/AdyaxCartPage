import { createActions, handleActions } from "redux-actions";

const defaultState = {
	title: 'Default title',
	description: 'Default description',
	cost: 25,
	render: [],
	id: 0,
	hoverTitle: false,
	hoverDescription: false,
	hoverCost: false,
	quantity: 0
};

export const {setTitle, setDescription, setCost, setRenderSequence,
							remTitle, remDescription, remCost, remRenderSequence,
						 	setHoverTitle, setHoverDescription, setHoverCost, incrementQuantity} = createActions({
	"SET_TITLE": (title) => ({ title: title }),
	"SET_DESCRIPTION": (description) => ({ description: description }),
	"SET_COST": (cost) => ({ cost: cost }),
	"SET_RENDER_SEQUENCE": (render) => ({ newItem: {} }),
	"SET_HOVER_TITLE": (hoverTitle) => ({hoverTitle: hoverTitle}),
	"SET_HOVER_DESCRIPTION": (hoverDescription) => ({hoverDescription: hoverDescription}),
	"SET_HOVER_COST": (hoverCost) => ({hoverCost: hoverCost}),

	"REM_TITLE": (title) => ({ title: title }),
	"REM_DESCRIPTION": (description) => ({ description: '' }),
	"REM_COST": (cost) => ({ cost: '' }),
	"REM_RENDER_SEQUENCE": (render) => ({ newItem: '' }),
	"INCREMENT_QUANTITY": () => ({})
});

export const addItemReducer = handleActions({
	[incrementQuantity] (state, {payload: {}}) {
		return { ...state, quantity: state.quantity + 1 }
	},
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
		newItem.quantity = state.quantity

		let itemArray = state.render;
		itemArray.push(newItem);
		return { ...state, render: itemArray };
	},

	[remTitle] (state, {payload: {title}}) {
		return { ...state, title: title };
	},
	[setHoverTitle] (state, {payload: {hoverTitle}}) {
		return {...state, hoverTitle: hoverTitle}
	},
	[setHoverDescription] (state, {payload: {hoverDescription}}) {
		return {...state, hoverDescription: hoverDescription}
	},
	[setHoverCost] (state, {payload: {hoverCost}}) {
		return {...state, hoverCost: hoverCost}
	}
}, defaultState);
