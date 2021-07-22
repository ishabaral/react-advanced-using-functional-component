import React, { useEffect, useState } from "react";

function useDocTitle() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `${count} times`;
  }, [count]);

  return [count, handleCount];
}

export default useDocTitle;
