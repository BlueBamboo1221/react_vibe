import React from "react";
import RouteHandler from "../config/router";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PrimaryColor from "@material-ui/core/colors/deepPurple";
import SecondaryColor from "@material-ui/core/colors/pink";
import createPalette from "@material-ui/core/styles/createPalette";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import * as reducers from "../reducers";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const theme = createMuiTheme({
  palette: createPalette({
    primary: PrimaryColor,
    secondary: SecondaryColor
  })
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <RouteHandler />
    </MuiThemeProvider>
  </Provider>
);

export default App;
