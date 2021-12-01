import React from "react";
import { Container, Row } from "react-bootstrap";
//import "../empleados.css";
import DataGrid from "../../grid/grid";

const columns = [
  {
    dataField: "nombres",
    text: "Nombre",
  },
  {
    dataField: "apellidos",
    text: "Apellido",
  },
  {
    dataField: "telefono",
    text: " Teléfono ",
  },
  {
    dataField: "numeroDocumento",
    text: " N° de Documento ",
  },
  {
    dataField: "tipoDocumento",
    text: " Tipo de Documento ",
  },
];

export default class BuscarCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <Container id="clientes-buscar-container">
        <Row>
          <h2> CLIENTES REGISTRADOS </h2>
        </Row>
        <Row>
          <DataGrid url="/cliente" columns={columns} />
        </Row>
      </Container>
    );
  }
}
