import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="./" >useContext Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} aria-current="page" to="./">Home</NavLink>
                        <NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="./about">About</NavLink>
                        <NavLink className={({isActive}) => (isActive ? "active nav-link" : 'nav-link')} to="./login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>


        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="./">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="./about">About</Link>
        //         </li>
        //         <li>
        //             <Link to="./login">Login</Link>
        //         </li>
        //     </ul>
        // </nav>
    )
}
