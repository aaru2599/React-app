import React from 'react'
import useCounter from './useCounter'

const Counter = () => {
    const [count,increment,decrement]=useCounter()
    return (
        <div>
            <button onClick={increment}>Increment</button>
            {count}
            <button onClick={decrement}>Decrement</button>
            
        </div>
        
    )
}

export default Counter