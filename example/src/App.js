import './App.css';
import React, {useState} from "react";
import {Counter, Timer} from "./components";

function App() {

  return (
    <div className="App">
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
