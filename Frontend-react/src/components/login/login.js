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
      mensajeErrorShow: false,
      mensajeError: "",
      esCliente: true,
      mensaje: "Usuarios registrados",
    };
  }

  componentDidMount() {
    if (cookies.get("_s")) {
      cookies.remove("_s");
    }
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
          this.props.history.push("/admin");
        } else {
          this.setState({
            mensajeErrorShow: true,
            mensajeError: response.data.mensaje,
          });
        }

        this.setState({
          loading: false,
          mensajeErrorShow: false,
          mensajeError: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  iniciarSesionCte() {
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
          this.props.history.push("/clientes-inicio");
        } else {
          this.setState({
            mensajeErrorShow: true,
            mensajeError: response.data.mensaje,
          });
        }

        this.setState({ loading: false, mensajeErrorShow: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Loading show={this.state.loading} />
        <Header />
        <Container id="login-container">
          <h1>Inicio sesion</h1>
          <h3>{this.state.mensaje}</h3>

          <Form className="shadow p-3 mb-3 bg-body rounded p-4">
            <Alerta
              show={this.state.mensajeErrorShow}
              text={this.state.mensajeError}
              tipoAlerta={1}
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
          {this.state.esCliente && (
            <span>
              Usuario no registrado?
              <br />
              <a href="/registro">Registrarme</a>{" "}
            </span>
          )}
        </Container>
      </Container>
    );
  }
}
