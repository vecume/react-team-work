import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import HeroBanner from "./components/hero-banner/HeroBanner";
import data from "./data/index-hero.json";

function App() {
  return <HeroBanner {...data} />;
}

export default App;
