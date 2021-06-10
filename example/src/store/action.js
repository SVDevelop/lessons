import {useDispatch, useSelector} from "react-redux";

const dispatch = useDispatch()

export const counter = useSelector(state => state.counter)

export const increment = () => dispatch({
    type: 'increment',
    payload: 1
})
export const decrement = () => dispatch({
    type: 'decrement',
    payload: 1
})