import React, { useContext } from "react";
import { ColorContext } from "./colors";

function Home() {
  const colors = useContext(ColorContext);
  return <div style={{ backgroundColor: colors.blue }}>Hello World</div>;
}

export default Home;
