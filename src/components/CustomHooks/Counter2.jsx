import React from 'react'
import useCounter from './useCounter'

const Counter2 = () => {
    const [count,increment,decrement]=useCounter(100)
  return (
    <div>
          <button onClick={increment}>Increment</button>
            {count}
            <button onClick={decrement}>Decrement</button>
          
    </div>
  )
}

export default Counter2