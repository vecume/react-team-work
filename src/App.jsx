import React from "react";
import "./App.scss";
import Clients from "./components/our_clients/Clients";
import Partners from "./components/partners/Partners";


function App() {
  return (
    <>
    <div className="container">

      <Clients/>
      <Partners/>
    </div>
    </>
  );
}

export default App;
