import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    
    const [user, setUser] = useState({
            id: 12345,
            name: 'David',
            email: 'dsanva@gmail.com',
            login: false
    })    
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppRouter />
        </UserContext.Provider>
    )
}
