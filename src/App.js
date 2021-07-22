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
import { ColorContext } from "./components/useContextDemo/colors";
import Home from "./components/useContextDemo/Home";
import { colors } from "./components/useContextDemo/colors";
import SetTimerExample from "./components/SetTimerExample";
import CounterOne from "./components/UseReducer/CounterOne";
import CounterTwo from "./components/UseReducer/CounterTwo";
import CourseStatus from "./components/UseReducer/CourseStatus";
import Count from "./components/Hooks/Count";

function App() {
  return (
    <div className="App">
      <Count />
      {/* <CourseStatus /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <SetTimerExample user="Isha" notification={10} /> */}

      {/* <ColorContext.Provider value={colors}>
        <Home />
      </ColorContext.Provider> */}
      {/* <ContextProvider value="Isha">
        <ComponentA />
      </ContextProvider> */}

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
