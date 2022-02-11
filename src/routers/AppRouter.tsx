import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
    import {
        BrowserRouter as Router,
        Switch
    } from "react-router-dom";
import { DeshboardRoutes } from "./DeshboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import {firebase} from '../firebase/firebase-config'
import { login } from "../actions/auth";
import { LoginScreen } from "../components/Login/LoginScreen";
import { loadFavorites } from "../helpers/loadFavorites";
import { setFavorite } from "../actions/sports";

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setchecking] = useState<boolean>(true);
    const [isLoggedIn, setisLoggedIn] = useState<boolean>(false)


    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) =>{
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setisLoggedIn(true)

                const notes = await loadFavorites(user.uid)
                dispatch(setFavorite(notes))

            } else {
                setisLoggedIn(false)
            }
            setchecking(false)
        })
    }, [dispatch, setchecking, setisLoggedIn, setFavorite, loadFavorites])


if(checking) {
    return(
        <h1>Wait...</h1>
    )
}

    return (
        <div>
        <Router>
    <div>
        <div>
        <Switch>
        <PublicRoute
        exact path = "/login" component = {LoginScreen}
        isAuthenticated = {isLoggedIn}
        />

        <PrivateRoute
        path="/" 
        component = {DeshboardRoutes} 
        isAuthenticated = {isLoggedIn}
        />

        </Switch>
        </div>
        
    </div>
    </Router>
        </div>
        
    )
}
