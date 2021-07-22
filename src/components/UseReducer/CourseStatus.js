import React, { useReducer } from "react";

const initialState = {
  react: false,
  graphQL: false,
  angular: false,
};
const courseStatus = (state, action) => {
  switch (action.type) {
    case "react":
      return { react: true };
    case "graphQL":
      return { graphQL: true };
    case "angular":
      return { angular: true };
    default:
      return state;
  }
};

function CourseStatus() {
  const [course, dispatch] = useReducer(courseStatus, initialState);
  return (
    <div>
      <p>
        I am learning{" "}
        {course.react
          ? "React"
          : course.graphQL
          ? "graphql"
          : course.angular
          ? "Angular"
          : "nothing"}
      </p>
      <button onClick={() => dispatch({ type: "react" })}>React</button>
      <button onClick={() => dispatch({ type: "graphQL" })}>graphQL</button>
      <button onClick={() => dispatch({ type: "angular" })}>angular</button>
    </div>
  );
}

export default CourseStatus;
