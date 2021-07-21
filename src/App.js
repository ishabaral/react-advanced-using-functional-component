import "./App.css";
import ClickCounter from "./components/RenderProps/ClickCounter";
import Counter from "./components/RenderProps/Counter";
import DisplayArticle from "./components/HOC_1/DisplayArticle";
import ClickCounterHOC from "./components/HOC_2/ClickCounterHOC";
import HoverCounterHOC from "./components/HOC_2/HoverCounterHOC";
import HoverCounter from "./components/RenderProps/HoverCounter";
import ProtalsDemo from "./components/Portals/ProtalsDemo";
import EventBubblingDemo from "./components/EventBubbling/EventBubblingDemo";
import Bubbling2 from "./components/EventBubbling/Bubbling2";
import { ContextProvider } from "./components/ContextAPI/userContext";
import ComponentA from "./components/ContextAPI/ComponentA";

function App() {
  return (
    <div className="App">
      <ContextProvider value="Isha">
        <ComponentA />
      </ContextProvider>

      {/* <EventBubblingDemo /> */}
      {/* <ProtalsDemo /> */}
      {/* <ClickCounterHOC />
      <HoverCounterHOC /> */}
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
