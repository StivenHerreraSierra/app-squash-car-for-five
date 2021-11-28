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
        : "Ingrese sus datos completos para realizar el registro:",
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
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre(s)</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su Nombre:" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Apellido(s)</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su Apellido:" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTDoc">
                <Form.Label>Tipo de Documento</Form.Label>
                <Form.Select defaultValue="Seleccione">
                  <option>Seleccione</option>
                  <option>Cédula de Ciudadanía</option>
                  <option>Cédula de Extrangería</option>
                  <option>Pasaporte</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNDoc">
                <Form.Label>Número de Documento</Form.Label>
                <Form.Control type="Number" placeholder="Ejemplo: 123456789" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTel">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="Number" placeholder="N° Telefóno" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control placeholder="Calle 12 K 14-15" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Departamento</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              ENVIAR
            </Button>
          </Form>
        </Container>
      </Container>
    );
  }
}
