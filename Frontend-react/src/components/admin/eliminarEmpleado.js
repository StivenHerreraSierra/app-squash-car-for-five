import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import BuscarEmpleado from "./buscarEmpleado";
import "./admin.css";
import Loading from "../Loading/Loading";

export default class EliminarEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existeEmpleado: false,
      loading: false,
    };
  }
  verificarEmpleado() {
    this.setState({ existeEmpleado: true });
  }
  render() {
    return (
      <Container>
        <Loading show={this.state.loading} />
        <Header />
        <h1 id="admin-h1">Eliminar empleado</h1>
        <BuscarEmpleado searchMode={true} action={"Eliminar"}/>
      </Container>
    );
  }
}
