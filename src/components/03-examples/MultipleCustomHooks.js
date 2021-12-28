import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
    
    const { loading, data, error} = useFetch('https://www.breakingbadapi.com/api/quotes/75');
    
    const {author, quote} = data[0];
    console.log(data);

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
            
            
        </div>
    )
}
