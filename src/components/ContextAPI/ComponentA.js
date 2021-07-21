import React from "react";
import { ContextConsumer } from "./userContext";

function ComponentA() {
  return (
    <ContextConsumer>
      {(name, surName) => {
        return (
          <p>
            Name : {name} SurName: {surName}
          </p>
        );
      }}
    </ContextConsumer>
  );
}

export default ComponentA;
