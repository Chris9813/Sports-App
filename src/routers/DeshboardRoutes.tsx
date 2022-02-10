import React from "react";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { FavoriteScreen } from "../components/favoritePage/FavoriteScreen";
import { HomeScreen } from "../components/homePage/HomeScreen";
import { Navbar } from "../components/ui/NavBar";




export const DeshboardRoutes = () => {
    
    return (
    <>
    <Navbar />
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
