import { writable } from "svelte/store";

const store = writable({
  value: 0,
  className: "default"
});

const actionType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ASYNC: "ASYNC"
};

const reducer = action => {
  const { type, payload } = action;
  console.log("leftSideStore.reducer.action...", action);
  switch (type) {
    case actionType.INCREMENT:
      store.update(state => {
        return {
          ...state,
          value: state.value + payload,
          className: "increment"
        };
      });
      break;
    case actionType.DECREMENT:
      store.update(state => {
        return {
          ...state,
          value: state.value - payload,
          className: "decrement"
        };
      });
      break;
    case actionType.ASYNC:
      const { delay, value } = payload;
      store.update(state => {
        return {
          ...state,
          className: "wait"
        };
      });
      const ta = setTimeout(() => {
        store.update(state => {
          return {
            ...state,
            value: state.value + value,
            className: "default"
          };
        });
        clearTimeout(ta);
      }, delay);
      break;
    default:
      console.log("ActionType not supported: ", type);
  }
};

console.log("Initializing left side store");

export default {
  subscribe: store.subscribe,
  action: actionType,
  dispatch: action => {
    reducer(action);
  }
};
