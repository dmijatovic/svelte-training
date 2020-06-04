import { writable } from "svelte/store";

const store = writable(0);

const actionType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

const reducer = action => {
  const { type, payload } = action;
  switch (type) {
    case actionType.INCREMENT:
      store.update(val => {
        console.log("store.val...", val);
        return val + payload;
      });
      break;
    case actionType.DECREMENT:
      store.update(val => val - payload);
      break;
    default:
      console.log("ActionType not supported: ", type);
  }
};

console.log("Initializing right side store");

export default {
  subscribe: store.subscribe,
  action: actionType,
  dispatch: action => {
    reducer(action);
  }
};
