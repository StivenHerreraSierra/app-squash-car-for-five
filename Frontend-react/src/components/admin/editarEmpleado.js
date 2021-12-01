import React from "react";

import { Container } from "react-bootstrap";
import Header from "./header";
import BuscarEmpleado from "./buscarEmpleado";
import "./admin.css";
import Loading from "../Loading/Loading";

export default class EditarEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existeEmpleado: false,
      loading: false,
    };
  }
  render() {
    return (
      <Container>
        <Loading show={this.state.loading} />
        <Header />
        <Container id="admin-container">
          <h1 id="admin-h1">Edición empleados</h1>
          <BuscarEmpleado searchMode={false} action={"Actualizar"}/>
        </Container>
      </Container>
    );
  }
}
