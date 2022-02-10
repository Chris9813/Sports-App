import React from "react";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { FavoriteScreen } from "../components/favoritePage/FavoriteScreen";
import { HomeScreen } from "../components/homePage/HomeScreen";




export const DeshboardRoutes = () => {
    
    return (
    <>
    <div className= "container mt-3">
    <Switch>
    <Route exact path = "/homepage" component = {HomeScreen}/>
    <Route exact path = "/favorites" component = {FavoriteScreen}/>
    <Redirect to ="/homepage"/>
    </Switch>
    </div>    
    
    </>
    )
}
