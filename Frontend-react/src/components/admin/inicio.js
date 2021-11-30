import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./admin.css";
import DataGrid from "./grid/grid";

const columns = [
  {
    dataField: "_id",
    text: "Id en base de datos",
  },
  {
    dataField: "nombres",
    text: "Nombres",
  },
  {
    dataField: "apellidos",
    text: "Apellidos",
  },
  {
    dataField: "tipoDocumento",
    text: "Tipo de documento",
  },
  {
    dataField: "numeroDocumento",
    text: "Número de documento",
  },
  {
    dataField: "telefono",
    text: "Teléfono",
  },
];

export default class AdminSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header />
        <h1 id="admin-h1">Menú administración</h1>
        <h3 id="admin-h3">Empleados registrados</h3>
        <DataGrid url="/empleados" columns={columns} />
      </Container>
    );
  }
}
