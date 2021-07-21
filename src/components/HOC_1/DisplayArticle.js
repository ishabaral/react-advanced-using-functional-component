import React from "react";
import myHOC from "./myHOC";

function DisplayArticle({ author, article }) {
  return (
    <div>
      <p> Author: {author}</p>
      <p>Article: {article}</p>
    </div>
  );
}

export default myHOC(DisplayArticle);
