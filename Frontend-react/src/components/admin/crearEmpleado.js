import React from "react";
import { request } from "../helper/helper";
import { Container, Form, Button } from "react-bootstrap";
import Header from "./header";
import "./admin.css";
import Loading from "../Loading/Loading";
import Alerta from "../Alerta/alertaAccion";

export default class CrearEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empleado: {
        nombres: "",
        apellidos: "",
        tipoDocumento: "CC",
        numeroDocumento: "",
        usuario: "",
        telefono: "",
        pass: "",
        role: "Empleado",
      },
      loading: false,
      alerta: {
        show: false,
        mensaje: "",
        tipoAlerta: 0,
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

  establecerAlerta(show, mensaje, tipoAlerta) {
    this.setState({
      alerta: {
        show: show,
        mensaje: mensaje,
        tipoAlerta: tipoAlerta,
      },
    });
  }

  guardarEmpleado() {
    if (!this.verificarInputs()) {
      setTimeout(() => {
        this.establecerAlerta(false, "", 0);
      }, 2000);
      return;
    }

    this.setState({ loading: true });

    request
      .post("/empleados", this.state.empleado)
      .then((response) => {
        if (response.data.exito) {
          this.establecerAlerta(true, response.data.msg, 0);
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          this.establecerAlerta(true, response.data.msg, 1);
          setTimeout(() => {
            this.establecerAlerta(false, "", 0);
          }, 2000);
        }

        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: true });
        console.log(err);
      });
  }

  verificarInputs() {
    if (
      this.state.empleado.nombres &&
      this.state.empleado.apellidos &&
      this.state.empleado.tipoDocumento &&
      this.state.empleado.numeroDocumento &&
      this.state.empleado.telefono
    ) {
      return true;
    } else {
      this.establecerAlerta(true, "Todos los campos son obligatorios", 1);

      return false;
    }
  }

  render() {
    return (
      <Container>
        <Loading show={this.state.loading} />
        <Header />
        <Container id="admin-container">
          <h1 id="admin-h1">Registro empleados</h1>

          <Form className="shadow p-3 mb-3 bg-body rounded p-4">
            <Alerta
              show={this.state.alerta.show}
              text={this.state.alerta.mensaje}
              tipoAlerta={this.state.alerta.tipoAlerta}
            />
            <Form.Group className="mb-3" controlId="nombresEmpleado">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre(s) empleado"
                onChange={(e) => this.setValue("nombres", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="apellidosEmpleado">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellidos empleado"
                onChange={(e) => this.setValue("apellidos", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipDocumentoEmpleado">
              <Form.Label>Tipo de documento</Form.Label>
              <Form.Select
                onChange={(e) => this.setValue("tipoDocumento", e.target.value)}
                className="mb-3"
                aria-label="Tipo de documento"
              >
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de entranjería</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="numeroDocumentoEmpleado">
              <Form.Label>Número de documento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número de documento empleado"
                onChange={(e) => {
                  this.setValue("numeroDocumento", e.target.value);
                  this.setValue("usuario", e.target.value);
                  this.setValue("pass", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefonoEmpleado">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teléfono empleado"
                onChange={(e) => this.setValue("telefono", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => this.guardarEmpleado()}
              className="me-5"
            >
              Registrar
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
