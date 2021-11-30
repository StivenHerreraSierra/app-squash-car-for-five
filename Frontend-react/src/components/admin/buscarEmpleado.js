import React from "react";
import { Card, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { request } from "../helper/helper";

export default class BuscarEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existeEmpleado: false,
      searchMode: props.searchMode,
      action: props.action,
      mensajeError: "",
      numeroDocumento: "",
      tipoDocumento: "CC",
      idEmpleado: "",
      empleado: {
        nombres: "",
        apellidos: "",
        telefono: "",
      },
    };
  }

  setValue(index, value) {
    this.setState((state) => ({
      empleado: {
        ...state.empleado,
        [index]: value,
      },
    }));
  }

  getEmpleado() {
    request
      .getEmpleado(`/empleados/buscar/${this.state.numeroDocumento}`, {
        tipoDocumento: this.state.tipoDocumento,
      })
      .then((response) => {
        if (response.data !== null) {
          this.setState({ idEmpleado: response.data._id });
          this.setState({ existeEmpleado: true });
          this.setState({ mensajeError: "" });
          this.setValue("nombres", response.data.nombres);
          this.setValue("apellidos", response.data.apellidos);
          this.setValue("telefono", response.data.telefono);
        } else {
          this.setState({ mensajeError: "Usuario no encontrado" });
          this.setState({ existeEmpleado: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Card id="buscar-empleado-card">
        <Card.Header>
          <Form.Group className="mb-2 mt-2" controlId="tipDocumentoEmpleado">
            <Form.Label>Tipo de documento</Form.Label>
            <Form.Select
              onChange={(e) => {
                this.setState({ existeEmpleado: false });
                this.setState({ tipoDocumento: e.target.value });
              }}
              className="mb-3"
              aria-label="Tipo de documento"
            >
              <option value="CC">Cédula de ciudadanía</option>
              <option value="CE">Cédula de entranjería</option>
            </Form.Select>
          </Form.Group>
          <Card.Text className="mb-2 text-center">Usuario</Card.Text>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Usuario"
              aria-describedby="btn-buscar"
              onChange={(e) => {
                this.setState({ existeEmpleado: false });
                this.setState({ numeroDocumento: e.target.value });
              }}
            />
            <Button
              variant="outline-secondary"
              id="btn-buscar"
              onClick={() => {
                this.getEmpleado();
              }}
            >
              <BsSearch />
            </Button>
          </InputGroup>
          <Card.Text className="mb-2 text-center text-danger">
            <b>{this.state.mensajeError}</b>
          </Card.Text>
        </Card.Header>
        {this.state.existeEmpleado && (
          <Card.Body>
            <Card.Title className="mt-3 mb-2">Información empleado</Card.Title>
            <Form
              className="shadow p-4 bg-body rounded"
              id="editar-empleado-form"
            >
              <Form.Group className="mb-3" controlId="nombresEmpleado">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.empleado.nombres}
                  onChange={(e) => this.setValue("nombres", e.target.value)}
                  readOnly={this.state.searchMode}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="apellidosEmpleado">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.empleado.apellidos}
                  onChange={(e) => this.setValue("apellidos", e.target.value)}
                  readOnly={this.state.searchMode}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="tipDocumentoEmpleado">
                <Form.Label>Tipo de documento</Form.Label>
                <Form.Control
                  type="text"
                  readOnly
                  value={this.state.tipoDocumento}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="numeroDocumentoEmpleado">
                <Form.Label>Número de documento</Form.Label>
                <Form.Control
                  type="text"
                  readOnly
                  value={this.state.numeroDocumento}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="telefonoEmpleado">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.empleado.telefono}
                  onChange={(e) => this.setValue("telefono", e.target.value)}
                  readOnly={this.state.searchMode}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="me-5">
                {this.state.action}
              </Button>
              <Button variant="danger" type="submit" href="/admin">
                Cancelar
              </Button>
            </Form>
          </Card.Body>
        )}
      </Card>
    );
  }
}
