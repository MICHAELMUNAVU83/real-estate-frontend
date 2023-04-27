import { useState } from "react";
import "./App.css";
import Subscribe from "./components/Subscribe";
import ReadyToSell from "./components/ReadyToSell";
function App() {
  return (
    <div>
      <ReadyToSell />
      <Subscribe />
    </div>
  );
}

export default App;
