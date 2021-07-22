import React, { useReducer } from "react";

const initialState = 0;
const countReducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      Count : {count}
      <button onClick={() => dispatch("increment")}>Increase by 1</button>
      <button onClick={() => dispatch("decrement")}>Decrease by 1</button>
    </div>
  );
}

export default CounterOne;
