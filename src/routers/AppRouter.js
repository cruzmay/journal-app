import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import { PublicRouter } from './PublicRouter';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    
    const dispatch = useDispatch()
    const [checking, setchecking] = useState(true)
    const [isLoggedIn, setisLoggedIn] = useState(false)

    useEffect(()=>{
        firebase.auth().onAuthStateChanged( user => {
            if( user?.uid) {
                dispatch( login(user.uid, user.displayName))
                setisLoggedIn(true)
            } else {
                setisLoggedIn(false)
            }
            setchecking(false)
        })
    },[dispatch, setchecking])

    if(checking) {
        return (
            <h1>Loading...</h1>
        ) 
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter
                    path="/auth"
                    component={ AuthRouter }
                    isAuthenticated= { isLoggedIn }
                    />
                    <PrivateRoute
                    exact path="/"
                    component={ JournalScreen }
                    isAuthenticated= { isLoggedIn }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
