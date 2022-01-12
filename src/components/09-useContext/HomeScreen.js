import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    
    const {user} = useContext(UserContext);
    console.log(user.name)
    return (
        <div>
            <h1>Home Screen</h1>
            <hr />

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Status: {user.login?'Logged':'Not logged'}</p>
        </div>
    )
}
