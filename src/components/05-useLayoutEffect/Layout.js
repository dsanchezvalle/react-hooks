//import React, { useState } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    
    const { counter, increment } = useCounter(1);
    
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});


    const { quote } = !!data && data[0];
    
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
        
    }, [quote])

    
    
    return (
        <div>
            <h1>LayoutEffect Quotes</h1>
            <hr/>
            
            <blockquote className="blockquote text-end">
                <p
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>
            
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button className="btn btn-primary" onClick={increment}>Next Quote</button>    
            
        </div>
    )
}
