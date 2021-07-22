import React from "react";
import useCount from "./useCount";

function Count() {
  const [count, handleCount] = useCount();
  return (
    <div>
      <button onClick={handleCount}>Increase count</button>
      Count : {count}
    </div>
  );
}

export default Count;
