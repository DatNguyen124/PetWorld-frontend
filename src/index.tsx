import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import { ShoppingContextProvider } from "./context/shoppingContext";
import "./global.css";
import Header2 from "./components/Header2";
import Header1 from "./components/Header1";
import EndPage from "./components/EndPage";
const muiTheme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ShoppingContextProvider>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Header2 />
          <Header1 />
          <App />
          <EndPage />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </ShoppingContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
