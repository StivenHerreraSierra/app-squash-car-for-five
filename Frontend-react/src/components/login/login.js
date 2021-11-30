import React from "react";
import axios from "axios";
import { APIHOST as host } from "../../app.json";
import { Container, Form, Button } from "react-bootstrap";
import Header from "./header";
import "./login.css";
import Cookies from "universal-cookie";
import { calculaExtraccionSesion } from "../helper/helper";
import Loading from "../Loading/Loading";

const cookies = new Cookies();

export default class Login extends React.Component {
  constructor(props) {
    console.log();
    super(props);

    this.state = {
      loading: false,
      numeroDocumento: "",
      pass: "",
      esUsuario: !props.location.pathname.includes("empleado"),
      mensaje: props.location.pathname.includes("empleado")
        ? "Empleados"
        : "Usuarios registrados",
    };
  }

  iniciarSesion() {
    this.setState({ loading: true });

    axios
      .post(`${host}/empleados/login`, {
        numeroDocumento: this.state.numeroDocumento,
        pass: this.state.pass,
      })
      .then((response) => {
        if (response.data.token) {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExtraccionSesion(),
          });
          this.props.history.push("/admin");
        } else {
          this.iniciarSesionCte();
        }

        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  iniciarSesionCte() {
    this.setState({ loading: true });
    axios
      .post(`${host}/cliente/login`, {
        numeroDocumento: this.state.numeroDocumento,
        pass: this.state.pass,
      })
      .then((response) => {
        if (response.data.token) {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExtraccionSesion(),
          });
          this.props.history.push("/clientes-inicio");
        } else {
          alert(
            "Error de autenticación, verifique los datos e intente nuevamente"
          );
        }

        this.setState({ loading: false });
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
            <Form.Group className="mb-3" controlId="usuarioId">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese usuario"
                onChange={(e) =>
                  this.setState({ numeroDocumento: e.target.value })
                }
              />
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
                this.iniciarSesion();
              }}
            >
              Ingresar
            </Button>
          </Form>
          {this.state.esUsuario && (
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
