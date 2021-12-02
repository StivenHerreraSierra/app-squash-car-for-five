import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import BuscarCliente from "./crud/buscar";
import CrearCliente from "./crud/crear";
import HeaderAdmin from "../admin/header";
import "./inicioStyles.css";

export default class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
    };
  }
  render() {
    return (
      <Container id="clientes-container">
        <HeaderAdmin Clientes={true}/>
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="/buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">
                Tabla de Clientes Registrados
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">
                Formulario para Registro de Clientes Nuevos
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === "buscar" ? (
            <BuscarCliente />
          ) : (
            <CrearCliente />
          )}
        </Row>
      </Container>
    );
  }
}
