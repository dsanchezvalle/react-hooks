import React, { memo } from 'react'

export const Small = memo (({counter}) => {
    
    console.log('I rendered again')
    
    return (
        <small>
            { counter }
        </small>
    )
})
