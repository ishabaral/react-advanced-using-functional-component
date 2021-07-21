import React from "react";
import ReactDom from "react-dom";
import DialogBoxComponent from "./DialogBoxComponent";

function ProtalsDemo() {
  return ReactDom.createPortal(
    <DialogBoxComponent />,
    document.getElementById("portal-root")
  );
}

export default ProtalsDemo;
