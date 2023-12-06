import React, {useReducer} from 'react'

const initialState = 0
//For the transition to happen, the action is required. For our case we can have increment, decrement or reset.
//We can use the switch as the action.
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    //use Reducer accepts two arguments which must be defines as is the case outside the component
    //using the array destructuring feature we can easily get the current state and pass it using the right action
    //The dispatch method allows execute code corresponding to a particular action
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
