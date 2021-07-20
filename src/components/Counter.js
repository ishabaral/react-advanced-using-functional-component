import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  return <div>{props.children(count, increaseCount)}</div>;
}

export default Counter;
