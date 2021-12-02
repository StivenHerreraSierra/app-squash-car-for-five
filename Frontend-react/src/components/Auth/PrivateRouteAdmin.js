import React from "react";
import { Route, Redirect } from "react-router";
import { getSession } from "../helper/helper";

const checkAuth = () => {
  return !getSession() ? false : true;
};

export default class PrivateRouteAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      role: sessionStorage.getItem("role"),
      redirect: sessionStorage.getItem("role")
        ? "/empleados"
        : "/historialCliente",
    };
  }

  componentWillMount() {
    this.setState({
      auth:
        checkAuth() && !this.state.auth && this.state.role === "Administrador",
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
