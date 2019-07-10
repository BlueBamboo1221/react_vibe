import React from "react";

class Login extends React.Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "false") {
      renewSession();
    }
  }

  render() {
    return (
      <div>       
          <div className="login-btn">
                  <button  className="btn_new_client" onClick={this.login.bind(this)}>Login</button>
          </div>
      </div>
    );
  }
}

export default Login;
