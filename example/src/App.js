import './App.css';
import React, {useState} from "react";
import {Counter, Timer, CounterRedux} from "./components";
import {useDispatch, useSelector} from "react-redux";


function App({store}) {
    const dispatch = useDispatch()
    const value = useSelector(state => state.value)

    const increment = () => dispatch({
        type: "increment",
        payload: 1
    })
    const decrement = () => dispatch({
        type: "decrement",
        payload: 1
    })
  return (
    <div className="App">
      <Counter />
      <Timer />
        <CounterRedux />
    </div>
  );
}

export default App;
