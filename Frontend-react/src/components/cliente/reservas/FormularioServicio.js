import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default class Formulario extends React.Component {
  render() {
    return (
      <div className="formulario">
        <Form>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridPlaca">
              <Form.Label for="inputPlaca" className="form-label">
                Placa
              </Form.Label>
              <Form.Control type="text" id="inputPlaca"></Form.Control>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridTipoVehiculo">
              <Form.Label for="inputTipo">Tipo de vehículo</Form.Label>
              <select className="form-select" id="inputTipo">
                <option defaultValue value="Automóvil">
                  Automóvil
                </option>
                <option value="Bicicleta">Bicicleta</option>
                <option value="Bicicleta">Motocarro</option>
                <option value="Motocicleta">Motocicleta</option>
                <option value="Otros">Otros</option>
              </select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridFecha">
              <label for="inputTipo" className="form-label">
                Tipo de lavado
              </label>
              <select className="form-select" id="inputTipo">
                <option defaultValue value="Convencional">Convencional</option>
                <option value="Completo">Completo</option>
                <option value="Ecologico">Ecológico</option>
              </select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridFecha">
              <Form.Label for="inputObservaciones">
                Observaciones/Detalles
              </Form.Label>
              <textarea
                className="form-control"
                id="inputObservaciones"
                rows="3"
              ></textarea>
            </Form.Group>
          </Row>
        </Form>
      </div>
    );
  }
}
