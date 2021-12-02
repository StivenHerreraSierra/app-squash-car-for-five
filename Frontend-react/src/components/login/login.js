import React from "react";
import axios from "axios";
import { APIHOST as host } from "../../app.json";
import { Container, Form, Button } from "react-bootstrap";
import Header from "./header";
import "./login.css";
import Cookies from "universal-cookie";
import { calculaExtraccionSesion } from "../helper/helper";
import Loading from "../Loading/Loading";
import Alerta from "../Alerta/alertaAccion";

const cookies = new Cookies();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
      tipoDocumento: "CC",
      esCliente: true,
      mensaje: "Usuarios registrados",
      informacionUsuario: {
        id: "",
        nombre: "",
        role: "",
      },
      alerta: {
        show: false,
        mensaje: "",
        tipoAlerta: 0,
      },
    };
  }

  componentDidMount() {
    if (window.location.pathname.includes("empleados")) {
      this.setState({ esCliente: false, mensaje: "Empleados" });
    }
  }

  iniciarSesion() {
    this.setState({ loading: true });

    axios
      .post(`${host}/empleados/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
        tipoDocumento: this.state.tipoDocumento,
      })
      .then((response) => {
        if (response.data.token) {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExtraccionSesion(),
          });

          this.setInformacionUsuario(response, true);

          const ruta =
            response.data.role === "Administrador" ? "/admin" : "/empleados";

          this.establecerAlerta(response.data.mensaje);

          setTimeout(() => {
            this.props.history.push(ruta);
          }, 800);
        } else {
          this.establecerAlerta(response.data.mensaje, 1);
        }

        this.setState({
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  iniciarSesionCte() {
    if (this.state.usuario.search(/\D/g) >= 0) {
      this.establecerAlerta("Credenciales incorrectas", 1);
      return;
    }

    this.setState({ loading: true });
    axios
      .post(`${host}/cliente/login`, {
        numeroDocumento: this.state.usuario,
        pass: this.state.pass,
        tipoDocumento: this.state.tipoDocumento,
      })
      .then((response) => {
        if (response.data.token) {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExtraccionSesion(),
          });

          this.establecerAlerta(response.data.mensaje);
          this.setInformacionUsuario(response, false);

          setTimeout(() => {
            this.props.history.push("/historialCliente");
          }, 800);
        } else {
          this.establecerAlerta(response.data.mensaje, 1);
        }

        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setInformacionUsuario(response, esEmpleado) {    
    if (esEmpleado) {
      sessionStorage.setItem("idEmpleado", response.data.id);
      sessionStorage.setItem("nombreempleado", response.data.nombre);
      sessionStorage.setItem("role", response.data.role);
    } else {
      sessionStorage.setItem("clienteId", response.data.id);
      sessionStorage.setItem(
        "clienteNumeroDocumento",
        response.data.numeroDocumento
      );
      sessionStorage.setItem("clienteNombre", response.data.nombres);
    }
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
      <Container>
        <Loading show={this.state.loading} />
        <Header />
        <Container id="login-container">
          <h1>Inicio sesion</h1>
          <h3>{this.state.mensaje}</h3>

          <Form className="shadow p-3 mb-5 bg-body rounded p-4">
            <Alerta
              show={this.state.alerta.show}
              text={this.state.alerta.mensaje}
              tipoAlerta={this.state.alerta.tipoAlerta}
            />
            <Form.Group className="mb-3" controlId="usuarioId">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese usuario"
                onChange={(e) => this.setState({ usuario: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipDocumentoEmpleado">
              <Form.Label>Tipo de documento</Form.Label>
              <Form.Select
                onChange={(e) =>
                  this.setState({ tipoDocumento: e.target.value })
                }
                className="mb-3"
                aria-label="Tipo de documento"
              >
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de entranjería</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese contraseña"
                onChange={(e) => this.setState({ pass: e.target.value })}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (this.state.esCliente) {
                  this.iniciarSesionCte();
                } else {
                  this.iniciarSesion();
                }
              }}
            >
              Ingresar
            </Button>
          </Form>
          {this.state.esCliente ? (
            <div>
              Usuario no registrado?
              <br />
              <a href="/registro">Registrarme</a>
              <br />
              <br />
              <br />
              <a href="/login-empleados">Inicio sesion para empleados</a>
            </div>
          ) : (
            <div>
              <a href="/login">Inicio sesion para usuarios</a>
            </div>
          )}
        </Container>
      </Container>
    );
  }
}
