import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App.jsx';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        color: #000000;
    }

    a,
    a:visited {
        text-decoration: none;
        cursor: pointer;
        font-family: inherit;
    }

    button,
    ._btn {
        cursor: pointer;
        outline: none;
        font-family: inherit;
    }

    ul li {
        list-style: none;
    }

`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
