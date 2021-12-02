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
        <Header Editar={true} />
        <Container id="admin-container">
          <h1 id="admin-h1">Editar empleado</h1>
          <BuscarEmpleado editMode={true} action={"Actualizar"} />
        </Container>
      </Container>
    );
  }
}
