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
      listaServicios: [],
      idCliente: sessionStorage.getItem('idCliente')
    }

    this.obtenerListaServiciosFiltrada = this.obtenerListaServiciosFiltrada.bind(this);
  }

  componentDidMount() {
    this.obtenerListaServicios();
  }

  obtenerListaServicios() {
    axios.get(`${host}/servicio/listar/cliente/${this.state.idCliente}`)
      .then(response => response.data)
      .then(response => this.setState({ listaServicios: response }))
      .catch(err => console.error(err.message));
  }

  obtenerListaServiciosFiltrada(placa) {
    if(placa) {
      axios.get(`${host}/servicio/listar/vehiculo/${this.state.idCliente}/${placa}`)
        .then(response => response.data)
        .then(response => this.setState({ listaServicios: response }))
        .catch(err => console.error(err));
    } else {
      this.obtenerListaServicios();
    }
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
            <Buscador onFiltrarTabla={ this.obtenerListaServiciosFiltrada }/>
          </div>

          <Tabla rows={ this.state.listaServicios } />

        </div>
      </Container>
    );
  }
}
