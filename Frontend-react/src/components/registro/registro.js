import React from "react";

import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Header from "./header";
import "./registro.css";

export default class Registro extends React.Component {
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
          <h1>Registro</h1>
          <h3>{this.state.mensaje}</h3>

          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              ENVIAR
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
