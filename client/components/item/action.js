import { createActions, handleActions } from "redux-actions";

const defaultState = {
  selected: '',
  quantity: 0,
  cost: 0,
  amount: 0
};

export const { setSelect,
               incrementQuantity,
               decrementQuantity, amountRecount,
               setCostFromProps } = createActions({
	"SET_SELECT": (selected) => ({ selected: selected }),
  "INCREMENT_QUANTITY": () => ({}),
  "DECREMENT_QUANTITY": () => ({}),
  "AMOUNT_RECOUNT": () => ({}),
  "SET_COST_FROM_PROPS": (cost) => ({cost: cost})
});

export const itemReducer = handleActions({
	[setSelect] (state, {payload: {selected}}) {
		return { ...state, selected: selected };
	},
  [incrementQuantity] (state, {payload: {}}) {
    return { ...state, quantity: state.quantity + 1 }
  },
  [decrementQuantity] (state, {payload: {}}) {
    return state.quantity == 0 ? ({ ...state, quantity: state.quantity }) :
     ({...state, quantity: state.quantity - 1 })
  },
  [amountRecount] (state, {payload: {}}) {
    let am = (+state.cost + +state.selected) * state.quantity
    return {...state, amount: am}
  },
  [setCostFromProps] (state, {payload: {cost}}) {
    return {...state, cost: cost}
  }
}, defaultState);
