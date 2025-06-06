const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;
const FILL_UPDATE = "FILL_UPDATE";
const initialState = {
  type: "veggie",
  ingreditents: {
    bread: "whole griain",
    filling: "lettuce and tomato",
    sauce: "mustard",
  },
};
const updateFill = (filling) => {
  return {
    type: FILL_UPDATE,
    payload: filling,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_UPDATE:
      //   return {
      //     ...state,
      //     ingredients: {
      //       ...state.ingreditents,
      //       filling: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.ingreditents.filling = action.payload;
      });
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log("Initial State", store.getState);
const unsubscribe = store.subscribe(() => {
  console.log("Update State", store.getState());
});
store.dispatch(updateFill("Gilled Veggies & Cheese"));
unsubscribe();
