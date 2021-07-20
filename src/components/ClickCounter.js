import React from "react";

function ClickCounter({ count, increaseCount }) {
  console.log(count);
  return (
    <div>
      <button onClick={increaseCount}>Click to increase count: {count}</button>
    </div>
  );
}

export default ClickCounter;
