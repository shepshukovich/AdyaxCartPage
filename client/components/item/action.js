import { createActions, handleActions } from "redux-actions";

const defaultState = {
  selected: ''
};

export const { setSelect } = createActions({
	"SET_SELECT": (selected) => ({ selected: selected }),
});

export const itemReducer = handleActions({
	[setSelect] (state, {payload: {selected}}) {
		return { ...state, selected: selected };
	}
}, defaultState);
