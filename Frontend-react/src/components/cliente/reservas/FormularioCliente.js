import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default class FormularioCliente extends React.Component {
  render() {
    return (
      <div className="formulario">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Cédula *</Form.Label>
              <Form.Control
                type="number"
                id="inputCedula"
                disabled
                value={this.props.cliente.idCliente}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                type="text"
                id="inputNombre"
                disabled
                value={this.props.cliente.nombreCliente}
              />
            </Form.Group>
          </Row>
        </Form>
      </div>
    );
  }
}
