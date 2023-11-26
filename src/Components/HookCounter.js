import React, {useState} from 'react'

function HookCounter() {
    //Use state accespts the initial value of the state property and returns the new state and the method likely to be used to change the property
    const [count, setCount] = useState(0)


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounter
