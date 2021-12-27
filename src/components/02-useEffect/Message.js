import React, {useEffect, useState} from 'react'

export const Message = () => {
    
    const [{x,y}, setCoords] = useState({x:0, y:0})

    useEffect(() => {
    
        const mouseMove = (e) =>{    
                setCoords({x: e.x, y: e.y});
                //console.log(coords);
        }
    
        window.addEventListener('mousemove', mouseMove);
        console.log("msg mounted")
        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log("msg unmounted")
        }
    }, [])
    
    return (
        <>
          <h3>You are GREAT!</h3> 
          <p>
              x: {x} y: {y}
          </p> 
        </>
    )
}
