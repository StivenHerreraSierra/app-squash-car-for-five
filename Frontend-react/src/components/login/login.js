import React from "react";

import { Container, Form, Button } from "react-bootstrap";
import Header from "./header";
import "./login.css";

export default class Login extends React.Component {
  constructor(props) {
    console.log();
    super(props);

    this.state = {
      /*usuario: '',
        pass: '',*/
      esUsuario: !props.location.pathname.includes("empleado"),
      mensaje: props.location.pathname.includes("empleado")
        ? "Empleados"
        : "Usuarios registrados",
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <Container id="login-container">
          <h1>Inicio sesion</h1>
          <h3>{this.state.mensaje}</h3>

          <Form className="shadow p-3 mb-3 bg-body rounded p-4">
            <Form.Group className="mb-3" controlId="usuarioId">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese usuario" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
          {this.state.esUsuario && (
            <span>
              Usuario no registrado?
              <br />
              <a href="/registro">Registrarme</a>{" "}
            </span>
          )}
        </Container>
      </Container>
    );
  }
}
