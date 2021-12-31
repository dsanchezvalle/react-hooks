import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {
    
    console.log("I was rendered again")
    return (
        <button 
            className="btn btn-primary"
            onClick={ () => {
                increment(5);
            }}
        >
            Increment
        </button>
    )
})
