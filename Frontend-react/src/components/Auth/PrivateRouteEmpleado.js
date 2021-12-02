import React from "react";
import { Route, Redirect } from "react-router";
import { getSession } from "../helper/helper";



export default class PrivateRouteEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      role: sessionStorage.getItem("role"),
    };
  }

  componentWillMount() {
    const estado =  this.checkAuth
    this.setState({
      auth: estado && !this.state.auth && this.state.role,
    });
  }

   checkAuth () {
    return !getSession() ? false : true;
  };

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
                pathname: "/historialCliente",
                state: { from: this.props.location },
              }}
            />
          )
        }
      />
    );
  }
}
