import React from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LanguageProvider from "./context/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
