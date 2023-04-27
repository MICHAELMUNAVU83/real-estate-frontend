import { useState } from "react";
import "./App.css";
import Subscribe from "./components/Subscribe";
import ReadyToSell from "./components/ReadyToSell";
import Reviews from "./components/Reviews";
function App() {
  return (
    <div>
      <ReadyToSell />
      <Reviews />
      <Subscribe />
    </div>
  );
}

export default App;
