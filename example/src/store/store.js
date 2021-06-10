import {createStore} from "redux";

const defaultState= {counter: 0}

const reducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...store,
                counter: state.counter + action.payload
            }
        case 'decrement':
            return {
                ...store,
                counter: state.counter - action.payload
            }
        default:
            return state
    }
}
const store = createStore(reducer)

export default store