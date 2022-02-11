import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000000",
};

export const darkTheme = {
  body: "#1c1e1f",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props:any) => props.theme.body};
	}
`;