import React, { useState } from "react";
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { request } from "../helper/helper";
import Alerta from "../Alerta/alertaAccion";

export default class BuscarEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existeEmpleado: false,
      deshabilitarBusqueda: true,
      action: props.action,
      numeroDocumento: "",
      tipoDocumento: "CC",
      idEmpleado: "",
      empleado: {
        nombres: "",
        apellidos: "",
        telefono: "",
      },
      alerta: {
        show: false,
        mensaje: "",
        tipoAlerta: 0,
      },
      showModal: false,
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
          this.setValue("nombres", response.data.nombres);
          this.setValue("apellidos", response.data.apellidos);
          this.setValue("telefono", response.data.telefono);
        } else {
          this.establecerAlerta("No se ha encontrado el empleado", 1);
          this.setState({ existeEmpleado: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  seleccionarAccion = (accion) => {
    this.setState({ showModal: false });

    if (accion === "cancelar") {
      return;
    }

    if (this.props.editMode) {
      this.editarEmpleado();
    } else {
      this.eliminarEmpleado();
    }
  };

  editarEmpleado() {
    request
      .actualizarEmpleado(
        `/empleados/${this.state.idEmpleado}`,
        this.state.empleado
      )
      .then((response) => {
        if (response.data.exito) {
          this.establecerAlerta(response.data.msg);
          setTimeout(() => {
            window.location.reload();
          }, 1200);
        } else {
          this.establecerAlerta(response.data.msg, 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  eliminarEmpleado() {
    request
      .eliminarEmpleado(`/empleados/${this.state.idEmpleado}`)
      .then((response) => {
        if (response.data.exito) {
          this.establecerAlerta(response.data.msg);
          setTimeout(() => {
            window.location.reload();
          }, 1200);
        } else {
          this.establecerAlerta(response.data.msg, 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  establecerAlerta(mensaje, tipoAlerta = 0) {
    this.setState({
      alerta: {
        show: true,
        mensaje: mensaje,
        tipoAlerta: tipoAlerta,
      },
    });

    setTimeout(() => {
      this.setState({ alerta: { show: false } });
    }, 1200);
  }

  render() {
    return (
      <>
        <MostrarModal
          show={this.state.showModal}
          opcionSeleccionada={this.seleccionarAccion}
        />
        <Card id="buscar-empleado-card">
          <Card.Header>
            {!this.state.existeEmpleado && (
              <Alerta
                show={this.state.alerta.show}
                text={this.state.alerta.mensaje}
                tipoAlerta={this.state.alerta.tipoAlerta}
              />
            )}
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
                  this.setState({ numeroDocumento: e.target.value }, () => {
                    const flag = this.state.numeroDocumento.length < 1;
                    this.setState({ deshabilitarBusqueda: flag });
                  });
                }}
              />
              <Button
                variant="outline-secondary"
                id="btn-buscar"
                onClick={() => {
                  this.getEmpleado();
                }}
                disabled={this.state.deshabilitarBusqueda}
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
              <Card.Title className="mt-3 mb-2">
                Información empleado
              </Card.Title>
              <Form
                className="shadow p-4 bg-body rounded"
                id="editar-empleado-form"
              >
                <Alerta
                  show={this.state.alerta.show}
                  text={this.state.alerta.mensaje}
                  tipoAlerta={this.state.alerta.tipoAlerta}
                />
                <Form.Group className="mb-3" controlId="nombresEmpleado">
                  <Form.Label>Nombres</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.empleado.nombres}
                    onChange={(e) => this.setValue("nombres", e.target.value)}
                    readOnly={!this.props.editMode}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="apellidosEmpleado">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.empleado.apellidos}
                    onChange={(e) => this.setValue("apellidos", e.target.value)}
                    readOnly={!this.props.editMode}
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
                <Form.Group
                  className="mb-3"
                  controlId="numeroDocumentoEmpleado"
                >
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
                    readOnly={!this.props.editMode}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="me-5"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showModal: true });
                  }}
                >
                  {this.state.action}
                </Button>
                <Button variant="danger" type="submit" href="/admin">
                  Cancelar
                </Button>
              </Form>
            </Card.Body>
          )}
        </Card>
      </>
    );
  }
}

function MostrarModal(props) {
  const aceptar = () => {
    props.opcionSeleccionada("aceptar");
  };

  const cancelar = () => {
    props.opcionSeleccionada("cancelar");
  };

  return (
    <>
      <Modal show={props.show} onHide={cancelar}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar acción</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Continuar con la acción?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={aceptar}>
            Aceptar
          </Button>
          <Button variant="secondary" onClick={cancelar}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
