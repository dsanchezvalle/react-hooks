import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {
    
    const {state:counter, increment, decrement, reset} = useCounter(200)
  
    return (
        <>
          <h1>Counter Hook: { counter }</h1>  
          <hr/>

          <button className='btn btn-primary' onClick={()=>increment()}>+ 1</button>
          <button className='btn btn-success' onClick={reset}>Reset</button>
          <button className='btn btn-secondary' onClick={()=>decrement()} >- 1</button>


        </>
    )
}
