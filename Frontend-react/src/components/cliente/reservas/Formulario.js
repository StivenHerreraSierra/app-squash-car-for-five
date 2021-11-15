import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default class Formulario extends React.Component {
  render() {
    return (
      <div>
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
                class="form-control"
                id="inputTelefono1"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTelSec">
              <Form.Label for="inputTelefono2">Teléfono secundario</Form.Label>
              <Form.Control
                type="tel"
                class="form-control"
                id="inputTelefono2"
              />
            </Form.Group>
          </Row>

          <hr />

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridPlaca">
              <Form.Label for="inputPlaca" class="form-label">
                Placa
              </Form.Label>
              <Form.Control type="text" id="inputPlaca"></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTipoVehiculo">
              <Form.Label for="inputTipo">Tipo de vehículo</Form.Label>
              <select class="form-select" id="inputTipo">
                <option selected value="Automóvil">
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
              <label for="inputTipo" class="form-label">
                Clasificación
              </label>
              <select class="form-select" id="inputTipo">
                <option selected value="Carga">
                  Carga
                </option>
                <option value="Deportivo">Deportivo</option>
                <option value="Familiar">Familiar</option>
                <option value="Sedán">Sedán</option>
                <option value="Todoterreno">Todoterreno</option>
                <option value="Otro">Otro</option>
              </select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridFecha">
              <Form.Label for="inputObservaciones">
                Observaciones/Detalles
              </Form.Label>
              <textarea
                class="form-control"
                id="inputObservaciones"
                rows="3"
              ></textarea>
            </Form.Group>
          </Row>
        </Form>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
          <button class="btn btn-secondary" type="button">
            Limpiar
          </button>

          <button
            class="btn btn-primary me-md-2"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#confirmacionModal"
          >
            Reservar
          </button>
        </div>
      </div>
    );
  }
}
