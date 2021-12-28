//import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    //console.log(state)
    //const {counter, setCounter} = useState(1);
    const { loading, data, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = !!data && data[0];
    //console.log(author, quote)
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {loading?(
                <div className="alert alert-info text-center">
                     Loading...
                </div>
            ):(
                <blockquote className="blockquote text-end">
                    <p>{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )
            }
            
            <button className="btn btn-primary" onClick={increment}>Next Quote</button>    
            
        </div>
    )
}
