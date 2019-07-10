import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Login from "../components/login/index";
import Home from "../components/home/index";
import Splash from "../components/splash/index";

import Clientsmanagement from "../components/clientsmanagement/index";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";
import Auth from "../components/clientsmanagement/Auth/Auth";
import Loading from "../components/clientsmanagement/Loading/Loading";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};
const RouteHandler = (props) => (
  <Router>
    <Switch>
      {/* {(props.state.requestingRestore || props.state.requestingAuth) && (<Splash />)} */}
      <PrivateRoute exact path="/" component={Clientsmanagement} state={props.state} />
      {/* <PrivateRoute path="/orders" component={Orders} state={props.state} /> */}
      {/* <PrivateRoute path="/clientsmanagement" component={Clientsmanagement} state={props.state} /> */}
      {/* <Route path="/orders" render={props => <Orders auth={auth} {...props} />} /> */}
      <Route path="/clientsmanagement" render={props => <Clientsmanagement auth={auth} {...props} />} />
      <Route path="/login" render={props => <Login auth={auth} {...props} />} />
      <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Loading {...props} />;
          }}
        />
    </Switch>
  </Router>
);

const PrivateRoute = ({ component: Component, ...rest, state }) => (
  <Route
    {...rest}
    render={props =>
      state.isAuth ? (
        <Home>
         <Component />
        </Home>
      ) :         <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
    }
  />
)


export default connect(
  state => ({ state: state.authenticate }),
  dispatch => ({
    actions: bindActionCreators(authActions, dispatch)
  })
)(RouteHandler);
