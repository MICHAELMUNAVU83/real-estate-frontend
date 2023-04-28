import { useState } from "react";
import "./App.css";
import Subscribe from "./components/Subscribe";
import ReadyToSell from "./components/ReadyToSell";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <ReadyToSell />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
