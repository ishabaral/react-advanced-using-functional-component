import React from "react";

function SetTimerExample({ user, notification }) {
  const displayMessage = () => {
    alert(`Hi, ${user}, you have ${notification} notification pending.`);
  };

  const handleMouseOver = () => {
    setTimeout(displayMessage, 3000);
    // alert("YOUCLICKED ME!!!");
  };

  return (
    <div>
      <button onClick={handleMouseOver}>Click me</button>
    </div>
  );
}

export default SetTimerExample;
