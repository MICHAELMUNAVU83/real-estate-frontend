import { useState } from "react";
import "./App.css";
import Subscribe from "./components/Subscribe";
import ReadyToSell from "./components/ReadyToSell";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
function App() {
  return (
    <div>
      <ReadyToSell />
      <Reviews />
      <Articles />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
