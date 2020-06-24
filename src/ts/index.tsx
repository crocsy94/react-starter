import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { museosans100, museosans300, museosans500, museosans700, museosans900 } from "../fonts/fonts";
import App from "./App";

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
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
