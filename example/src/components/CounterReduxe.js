// import { useDispatch, useSelector} from "react-redux";
import React from "react";
import {counter, increment, decrement} from "../store/action"
// const DECRWEMENT = 'decrement'
// const INCREMENT = 'increment'

console.log(counter)
export default function CounterRedux ({children}) {
// state action -> dispath -> reducer    const store = createStore()

    // const dispatch = useDispatch()
    // const counter = useSelector(state => state.counter)
    //
    // const increment = () => dispatch({
    //     type: 'increment',
    //     payload: 1
    // })
    // const decrement = () => dispatch({
    //     type: 'decrement',
    //     payload: 1
    // })

    return (
        <>
            <div>{counter}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}