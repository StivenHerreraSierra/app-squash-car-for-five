import React from "react";
import "./historialStyles.css";
import Barra from "../BarraCliente";
import Buscador from "./buscador";
import Tabla from "./tablaHistorial";
import { Container } from "react-bootstrap";
import axios from "axios";
import { APIHOST as host } from '../../../app.json';

export default class HistorialCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaServicios: []
    }
  }

  componentDidMount() {
    axios.get(`${host}/servicio/listar/cliente/09876`)
      .then(response => response.data)
      .then(response => this.setState({ listaServicios: response }))
      .catch(err => console.error(err.message));
  }

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

          <Tabla rows={ this.state.listaServicios } />

        </div>
      </Container>
    );
  }
}
