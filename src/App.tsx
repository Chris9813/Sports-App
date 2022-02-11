import React, { useState } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";



const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return <div>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
    <Provider store={store}>
    <AppRouter />
    </Provider>
    </StyledApp>
    </ThemeProvider>
  </div>
}

export default App;
