import React from "react";
import { Table } from "react-bootstrap";
import RowTablaHistorial from "./rowTablaHistorial";

export default class Tabla extends React.Component {
  render() {
    return (
      <Table hover striped>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha</th>
            <th scope="col">Placa</th>
            <th scope="col">Tipo Lavado</th>
            <th scope="col">Estado</th>
            <th scope="col">Costo</th>
          </tr>
        </thead>

        <tbody>
          {
            this.props.rows.map(row => <RowTablaHistorial  key={row.id} data={row} />)
          }
        </tbody>
      </Table>
    );
  }
}
