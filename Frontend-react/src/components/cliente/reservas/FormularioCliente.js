import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default class FormularioCliente extends React.Component {
  render() {
    return (
      <div className="formulario">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCedula">
              <Form.Label for="inputCedula">Cédula</Form.Label>
              <Form.Control
                type="number"
                id="inputCedula"
                disabled
                value="89182341"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label for="inputNombre">Nombre</Form.Label>
              <Form.Control
                type="text"
                id="inputNombre"
                disabled
                value="Nombre del cliente"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 justify-content-start">
            <Form.Group as={Col} controlId="formGridTelPpal">
              <Form.Label className="label" for="inputTelefono1">
                Teléfono principal
              </Form.Label>
              <Form.Control
                type="tel"
                className="form-control"
                id="inputTelefono1"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTelSec">
              <Form.Label for="inputTelefono2">Teléfono secundario</Form.Label>
              <Form.Control
                type="tel"
                className="form-control"
                id="inputTelefono2"
              />
            </Form.Group>
          </Row>
        </Form>
      </div>
    );
  }
}
