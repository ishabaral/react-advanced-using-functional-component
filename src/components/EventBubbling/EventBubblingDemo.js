import React, { useState } from "react";

function EventBubblingDemo() {
  const [count, setCount] = useState(0);

  //   const handleClick = (event) => {
  //     let bubbleDemo = event.bubbles;
  //     console.log(bubbleDemo);
  //   };
  return (
    <div onClick={(e) => alert("Fired after button click")}>
      <button
        onClick={(e) => {
          //   e.stopPropagation();
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Click here
      </button>
      Count: {count}
    </div>
  );
}

export default EventBubblingDemo;
