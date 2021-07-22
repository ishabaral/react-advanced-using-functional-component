import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <p>First Count: {count.firstCounter}</p>
      <p>Second count: {count.secondCounter}</p>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        Decrement by 5
      </button>
    </div>
  );
}

export default CounterTwo;
