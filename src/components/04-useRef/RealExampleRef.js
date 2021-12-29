import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/effect.css'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real Example Ref</h1>
            <button className='btn btn-success mt-4' onClick={()=>setShow(!show)}>Show quotes</button>
            <hr />

            {show && <MultipleCustomHooks />}

            
        </div>
    )
}
