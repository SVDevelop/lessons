import {useEffect, useRef, useState} from "react";

export default function () {
    const timerIdRef = useRef(null)
    const [count, setCount] = useState(0)
    const [isTimer, setIsTimer] = useState(false)

    const handlerClick = () => setIsTimer(!isTimer)

    useEffect(() => {
       if (isTimer) {
            timerIdRef.current = setInterval(() => setCount(prev => prev + 1),1000)
       }
       return () => {
            timerIdRef.current && clearInterval(timerIdRef.current)
            timerIdRef.current = null
       }
    }, [isTimer])
    return (
        <div className='container'>
            <p>{count}</p>
            <button onClick={handlerClick} >{isTimer ? 'stop' : 'start'}</button>
        </div>
    )
}