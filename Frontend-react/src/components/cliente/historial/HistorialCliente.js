import React from "react";
import "./historialStyles.css";
import Barra from "../BarraCliente";
import Buscador from "./buscador";
import Tabla from "./tabla";
import Pagination from "./paginacionTabla";
import { Container } from "react-bootstrap";

export default class HistorialCliente extends React.Component {
  render() {
    return (
      <Container fluid>
        <Barra />

        <header className="m-4 titulo">
          <h1>Historial de servicios</h1>
        </header>

        <div className="px-5">
          <div className="buscador">
            <Buscador />
          </div>

          <Tabla />

          <div className="d-flex justify-content-center">
            <Pagination className="mx-auto" />
          </div>
        </div>
      </Container>
    );
  }
}
