import React, { useEffect, useState } from "react";
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
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes";



const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


export const DeshboardRoutes = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    

    const themeToggler = () => {
        if(localStorage.getItem("theme") === "light"){
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }
        
    };


    return (
    <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
    <Navbar />
    <button className="bt btn-primary" onClick={() => themeToggler()}>Change Theme</button>
    <div className= "container mt-3">
    <Switch>
    <Route exact path = "/homepage" component = {HomeScreen}/>
    <Route exact path = "/homepage/:sportId" component = {SportScreen}/>
    <Route exact path = "/favorites" component = {FavoriteScreen}/>
    <Redirect to ="/homepage"/>
    </Switch>
    </div>    
    </StyledApp>
    </ThemeProvider>
    </>
    )
}
