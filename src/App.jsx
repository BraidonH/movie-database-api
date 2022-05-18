import { useState, useEffect } from "react";
import Home from "./components/home-component";
import Nav from "./components/nav.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
