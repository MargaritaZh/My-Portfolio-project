import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyle=createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    * {
        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.primaryBg} ${theme.colors.fontDescription};
    }

    *::-webkit-scrollbar {
        width: 10px;
    }

    *::-webkit-scrollbar-track {
        background-color: ${theme.colors.fontDescription};
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.primaryBg};
        border: 2px solid ${theme.colors.fontDescription};
        border-radius: 5px;
    }

    body {
        margin: 0;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        letter-spacing: 0%;
        line-height: 1.2;
        text-transform: capitalize;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
    }

    h1 {
        font-size: 48px;
        font-weight: 700;
    }
    h2{
        font-size: 32px;
        font-weight: 700;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.6;
        color: ${theme.colors.fontDescription};
    }

    span {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.6;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }


`