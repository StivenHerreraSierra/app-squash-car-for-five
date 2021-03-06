import React from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { request } from "../helper/helper";
import Header from "../login/header";
import "./registro.css";
import { calculaExtraccionSesion } from "../helper/helper";
import Cookies from "universal-cookie";
import Alerta from "../Alerta/alertaAccion";

const cookies = new Cookies();

export default class CrearCliente extends React.Component {
  constructor(props) {
    console.log();
    super(props);
    this.state = {
      cliente: {
        nombres: "",
        apellidos: "",
        tipoDocumento: "CC",
        numeroDocumento: 0,
        telefono: 0,
        pass: "",
      },
      alerta: {
        show: false,
        mensaje: "",
        tipoAlerta: 0,
      },
    };
  }

  setValue(index, value) {
    this.setState({
      cliente: {
        ...this.state.cliente,
        [index]: value,
      },
    });
  }

  guardarCliente() {
    request
      .crearCliente("/cliente", this.state.cliente)
      .then((response) => {
        if (response.data.token) {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExtraccionSesion(),
          });

          sessionStorage.setItem("clienteId", response.data.id);
          sessionStorage.setItem(
            "clienteNumeroDocumento",
            response.data.numeroDocumento
          );
          sessionStorage.setItem("clienteNombre", response.data.nombres);

          this.establecerAlerta(response.data.mensaje);

          setTimeout(() => {
            this.props.history.push("/historialCliente");
          }, 800);
        } else {
          this.establecerAlerta(response.data.mensaje, 1);
        }
      })
      .catch((err) => {
        console.error(err);
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
      <Container id="container-registro">
        <Header />
        <Row>
          <h2>REGISTRO DE CLIENTES</h2>
        </Row>
        <Row>
          <Form>
            <Alerta
              show={this.state.alerta.show}
              text={this.state.alerta.mensaje}
              tipoAlerta={this.state.alerta.tipoAlerta}
            />
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre(s)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su Nombre:"
                  onChange={(e) => this.setValue("nombres", e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Apellido(s)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su Apellido:"
                  onChange={(e) => this.setValue("apellidos", e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Tipo de Documento</Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) =>
                    this.setValue("tipoDocumento", e.target.value)
                  }
                >
                  <option value="CC">C??dula de Ciudadan??a</option>
                  <option value="CE">C??dula de Extranjer??a</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNDoc">
                <Form.Label>N??mero de Documento</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Ejemplo: 123456789"
                  onChange={(e) => {
                    //                    const numeroDocumento =
                    this.setValue("numeroDocumento", e.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Tel??fono</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="N?? Telef??no"
                  onChange={(e) => this.setValue("telefono", e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTel">
                <Form.Label>Contrase??a</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Asigne una contrase??a"
                  onChange={(e) => this.setValue("pass", e.target.value)}
                />
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                this.guardarCliente();
              }}
            >
              GUARDAR
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
