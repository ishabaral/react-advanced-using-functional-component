import "./App.css";
import ClickCounter from "./components/RenderProps/ClickCounter";
import Counter from "./components/RenderProps/Counter";
import DisplayArticle from "./components/HOC_1/DisplayArticle";
import ClickCounterHOC from "./components/HOC_2/ClickCounterHOC";
import HoverCounterHOC from "./components/HOC_2/HoverCounterHOC";
import HoverCounter from "./components/RenderProps/HoverCounter";

function App() {
  return (
    <div className="App">
      <ClickCounterHOC />
      <HoverCounterHOC />
      {/* <DisplayArticle /> */}

      {/* <Counter>
        {(count, increaseCount) => {
          return <ClickCounter count={count} increaseCount={increaseCount} />;
        }}
      </Counter>

      <Counter>
        {(count, increaseCount) => {
          return <HoverCounter count={count} increaseCount={increaseCount} />;
        }}
      </Counter> */}
    </div>
  );
}

export default App;
