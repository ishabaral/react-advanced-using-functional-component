import React from "react";

function DialogBoxComponent() {
  return (
    <div>
      <button
        onClick={() =>
          alert(
            "Congratulations!!! You created dialogbox componnt and rendered using portal"
          )
        }
      >
        Click here
      </button>
    </div>
  );
}

export default DialogBoxComponent;
