import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.onFechaChange = this.onFechaChange.bind(this);
    this.onPlacaChange = this.onPlacaChange.bind(this);
    this.onTipoVehiculoChange = this.onTipoVehiculoChange.bind(this);
    this.onTipoLavadoChange = this.onTipoLavadoChange.bind(this);
    this.onObservacionChange = this.onObservacionChange.bind(this);
  }

  onFechaChange(e) {
    this.props.onFechaChange(e.target.value);
  }

  onPlacaChange(e) {
    this.props.onPlacaChange(e.target.value.trim());
  }

  onTipoVehiculoChange(e) {
    this.props.onTipoVehiculoChange(e.target.value);
  }

  onTipoLavadoChange(e) {
    this.props.onTipoLavadoChange(e.target.value);
  }

  onObservacionChange(e) {
    this.props.onObservacionChange(e.target.value.trim());
  }

  render() {
    return (
      <div className="formulario">
        <Form>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Fecha *</Form.Label>
              <Form.Control type="date" value={this.props.servicio.fecha} onChange={this.onFechaChange}/>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <Form.Label className="form-label">
                Placa *
              </Form.Label>
              <Form.Control type="text" id="inputPlaca" value={this.props.servicio.placa} onChange={this.onPlacaChange}></Form.Control>
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>Tipo de vehículo *</Form.Label>
              <Form.Select className="form-select" id="inputTipo" value={this.props.servicio.tipoVehiculo} onChange={this.onTipoVehiculoChange}>
                <option defaultValue value="Automóvil">
                  Automóvil
                </option>
                <option value="Bicicleta">Bicicleta</option>
                <option value="Motocarro">Motocarro</option>
                <option value="Motocicleta">Motocicleta</option>
                <option value="Otros">Otros</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3">
              <label className="form-label">
                Tipo de lavado *
              </label>
              <select className="form-select" id="inputTipo" value={this.props.servicio.tipoLavado} onChange={this.onTipoLavadoChange}>
                <option defaultValue value="Convencional">Convencional</option>
                <option value="Completo">Completo</option>
                <option value="Ecologico">Ecológico</option>
              </select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                Observaciones/Detalles
              </Form.Label>
              <textarea
                className="form-control"
                id="inputObservaciones"
                rows="3"
                onChange={this.onObservacionChange}
                value={this.props.servicio.observaciones}
              ></textarea>
            </Form.Group>
          </Row>
        </Form>
      </div>
    );
  }
}
