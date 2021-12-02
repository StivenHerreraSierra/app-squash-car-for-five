import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./admin.css";
import DataGrid from "./grid/grid";

const columns = [
  {
    dataField: "id",
    text: "Id del servicio",
  },
  {
    dataField: "nombreCliente",
    text: "Nombre cliente",
  },
  {
    dataField: "idVehiculo",
    text: "Placa del vehículo",
  },
  {
    dataField: "estado",
    text: "Estado",
  },
  {
    dataField: "observaciones",
    text: "Empleado asignado",
  },
];

export default class AdminSiteServicios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header Servicios={true} />
        <h1 id="admin-h1">Menú administración</h1>
        <h3 id="admin-h3">Historico servicios</h3>
        <DataGrid
          url="/servicio/listar"
          columns={columns}
          mostrarInputBusqueda={false}
        />
      </Container>
    );
  }
}
