import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'
import { Small } from './Small';

export const Memorize = () => {
    
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true)


    return (
        <div>
            <h1>Memorize</h1>
            <hr/>

            <p>Counter: <Small counter={counter} /></p>
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-outline-primary m-3" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
            
        </div>
    )
}
