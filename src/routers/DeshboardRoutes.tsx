import React from "react";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { FavoriteScreen } from "../components/favoritePage/FavoriteScreen";
import { HomeScreen } from "../components/homePage/HomeScreen";
import { SportsCards } from "../components/homePage/SportsCards";
import { SportScreen } from "../components/homePage/SportScreen";
import { Navbar } from "../components/ui/NavBar";




export const DeshboardRoutes = () => {
    
    return (
    <>
    <Navbar />
    <div className= "container mt-3">
    <Switch>
    <Route exact path = "/homepage" component = {HomeScreen}/>
    <Route exact path = "/homepage/:sportId" component = {SportScreen}/>
    <Route exact path = "/favorites" component = {FavoriteScreen}/>
    <Redirect to ="/homepage"/>
    </Switch>
    </div>    
    
    </>
    )
}
