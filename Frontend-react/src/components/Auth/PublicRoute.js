import React from "react";
import { Route, Redirect } from "react-router";
import { getSession } from "../helper/helper";

const checkAuth = () => {
  return getSession() ? false : true;
};

export default class PublicRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      role: localStorage.getItem("role"),
      redirect: "",
    };
  }

  componentWillMount() {
    let redirect = "";

    if (this.state.role) {
      redirect = this.state.role === "Administrador" ? "/admin" : "/empleados";
    } else {
      redirect = "/historialCliente";
    }

    this.setState({
      redirect: redirect,
      auth: checkAuth() && !this.state.auth,
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
