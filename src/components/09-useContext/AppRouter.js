import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
    Navigate
  } from 'react-router-dom';
  import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route exact path="/about" element={<AboutScreen />} />
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/" element={<HomeScreen />} />
                    {/* <Route path="*" element={<HomeScreen />} /> */}
                    <Route path="*" element={<Navigate to="./" />} />
                </Routes>
            </div>
        </Router>
    )
}
