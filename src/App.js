import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
      <Counter>
        {(count, increaseCount) => {
          return <ClickCounter count={count} increaseCount={increaseCount} />;
        }}
      </Counter>

      <Counter>
        {(count, increaseCount) => {
          return <HoverCounter count={count} increaseCount={increaseCount} />;
        }}
      </Counter>
    </div>
  );
}

export default App;
