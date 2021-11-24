import React from "react";

import { Container, Form, Button } from "react-bootstrap";
import Header from "./header";
import "./admin.css";

export default class EditarEmpleado extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Container id="admin-container">
          <h1>Edición empleados</h1>

          <Form className="shadow p-3 mb-3 bg-body rounded p-4">
            <Form.Group className="mb-3" controlId="nombresEmpleado">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" value="Nombre(s) empleado" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="apellidosEmpleado">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" value="Apellidos empleado" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipDocumentoEmpleado">
              <Form.Label>Tipo de documento</Form.Label>
              <Form.Select className="mb-3" aria-label="Tipo de documento">
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de entranjería</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="numeroDocumentoEmpleado">
              <Form.Label>Número de documento</Form.Label>
              <Form.Control
                type="number"
                value="12345"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefonoEmpleado">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="number" value="11111" />
            </Form.Group>

            <Button variant="primary" type="submit" className="me-5">
              Actualizar
            </Button>
            <Button variant="danger" type="submit" href="/admin">
              Cancelar
            </Button>
          </Form>
        </Container>
      </Container>
    );
  }
}
