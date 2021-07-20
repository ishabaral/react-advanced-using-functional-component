import React from "react";

function HoverCounter({ increaseCount, count }) {
  return (
    <div onMouseOver={increaseCount}>
      <h1>Hover over Me, Hovered {count} times</h1>
    </div>
  );
}

export default HoverCounter;
