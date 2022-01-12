import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => 
                    {
                        setUser( user => {
                            return {
                                ...user,
                                login: !user.login
                            }
                        }
                             );
                        navigate('/');
                    }
                    }
            >
                Log {user.login?'out':'in'}
            </button>
        </div>
    )
}
