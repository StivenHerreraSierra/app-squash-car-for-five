import React from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { request } from "../helper/helper";
import Header from "../login/header";
import "./registro.css";

export default class CrearCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: {
        nombres: "",
        apellidos: "",
        tipoDocumento: "",
        numeroDocumento: 0,
        telefono: 0,
        pass: "",
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
      .post("/cliente", this.state.cliente)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
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
                  <option>Seleccione su tipo de documento</option>
                  <option value="CC">Cédula de Ciudadanía</option>
                  <option value="CE">Cédula de Extrangería</option>
                  <option value="PTE">Pasaporte</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNDoc">
                <Form.Label>Número de Documento</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Ejemplo: 123456789"
                  onChange={(e) =>
                    this.setValue("numeroDocumento", e.target.value)
                  }
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTel">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="N° Telefóno"
                  onChange={(e) => this.setValue("telefono", e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTel">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Asigne una contraseña"
                  onChange={(e) => this.setValue("pass", e.target.value)}
                />
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              onClick={() => console.log(this.guardarCliente())}
            >
              GUARDAR
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
