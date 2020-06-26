import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { museosans100, museosans300, museosans500, museosans700, museosans900 } from "../fonts/fonts";
import App from "./components/pages/App";
import store from "./store";

const themeInstance = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [museosans100, museosans300, museosans500, museosans700, museosans900],
        "table": {
          borderSpacing: "0px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Museo Sans Rounded",
  },
});

ReactDOM.render(
  <ThemeProvider theme={themeInstance}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root"),
);
