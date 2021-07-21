import React, { useState } from "react";

function counterHOC(WrappedComponent) {
  function CounterHOC() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount(count + 1);
    };
    return <WrappedComponent count={count} handleCount={handleCount} />;
  }
  return CounterHOC;
}

export default counterHOC;
