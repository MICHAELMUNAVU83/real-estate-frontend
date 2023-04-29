import { useState } from "react";
import "./App.css";
import Subscribe from "./components/Subscribe";
import ReadyToSell from "./components/ReadyToSell";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <Hero />
      <ReadyToSell />
      <Reviews />
      <Articles />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
