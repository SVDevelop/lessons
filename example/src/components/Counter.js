import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const decrement = () => setCount(count - 1)
    const increment = () => setCount(count + 1)
    return (
        <div className="counter">
            <button onClick={increment}>+1</button>
            <p>{count}</p>
            <button onClick={decrement}>-1</button>
        </div>
    )
}