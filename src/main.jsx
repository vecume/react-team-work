import React from "react";
import ReactDOM from "react-dom/client";
import Developing from "./components/developing/Developing";
import Header from "./components/header/Header";
import "./components/index.scss";
import Line from "./components/line/Line";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Line />
    <Developing />
  </React.StrictMode>
);