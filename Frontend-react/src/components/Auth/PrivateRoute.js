import React from "react";
import { Route, Redirect } from "react-router";
import { getSession } from "../helper/helper";

const checkAuth = () => {
  return !getSession() ? false : true;
};

export default class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      role: sessionStorage.getItem("role"),
      redirect: "",
    };
  }

  componentWillMount() {
    let redirect = "";
    let esCliente = true;

    if (this.state.role) {
      esCliente = false;
      redirect = this.state.role === "Administrador" ? "/admin" : "/empleados";
    } else {
      redirect = "/login";
    }

    this.setState({
      redirect: redirect,
      auth: checkAuth() && !this.state.auth && esCliente,
    });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          this.state.auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: this.state.redirect,
                state: { from: this.props.location },
              }}
            />
          )
        }
      />
    );
  }
}
