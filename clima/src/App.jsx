import { useState } from "react";
import reactLogo from "./assets/react.svg";
import WeatherApp from "./components/weatherApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
