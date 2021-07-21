import React from "react";
import counterHOC from "./counterHOC";

function ClickCounterHOC(props) {
  const { handleCount, count } = props;
  return (
    <div>
      <button onClick={handleCount}>You clicked {count} times</button>
    </div>
  );
}

export default counterHOC(ClickCounterHOC);
