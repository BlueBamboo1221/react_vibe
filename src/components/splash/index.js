import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import { bindActionCreators } from "redux";
import * as authActions from "../../actions/authenticate";
import { connect } from "react-redux";

import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {
    flexGrow: 1
  }
};

class Splash extends Component {
  componentDidMount() {
    if (!this.props.state.requestingAuth) {
      this.props.actions.restoreSession();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress />
      </div>
    );
  }
}

export default connect(
  state => ({ state: state.authenticate }),
  dispatch => ({
    actions: bindActionCreators(authActions, dispatch)
  })
)(withStyles(styles)(Splash));
