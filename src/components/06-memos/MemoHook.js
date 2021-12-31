import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'

export const MemoHook = () => {
    
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true)
    
    const returnHeavyProcess = useMemo(() => heavyProcess(counter), [counter] )
    
    return (
        <div>
            <h1>Memo Hook</h1>
            <hr/>

            <p>Counter: <small>{ counter }</small></p>
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-outline-primary m-3" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
            <p>{returnHeavyProcess}</p>
        </div>
    )
}
