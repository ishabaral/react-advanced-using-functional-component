import React from "react";
import counterHOC from "./counterHOC";

function HoverCounterHOC(props) {
  const { handleCount, count } = props;
  return (
    <div onMouseOver={handleCount}>
      <h1>Hover over me</h1>
      <p>You hovered {count} times</p>
    </div>
  );
}

export default counterHOC(HoverCounterHOC);
