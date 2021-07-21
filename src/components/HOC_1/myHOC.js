import React from "react";

function myHOC(MyOtherComponent) {
  function MyHOC() {
    return <MyOtherComponent author="Adhithi" article="New article" />;
  }
  return MyHOC;
}

export default myHOC;
