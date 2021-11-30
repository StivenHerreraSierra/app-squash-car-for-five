import React from "react";
import { Button } from "react-bootstrap";
import { BsFillEyeFill, BsFillPrinterFill } from "react-icons/bs";

export default class RowTablaHistorial extends React.Component {
  render() {
    return (
      <tr>
        <th scope="row">{ this.props.data.id }</th>
        <td>{new Date(this.props.data.fecha).toLocaleDateString()}</td>
        <td>{this.props.data.idVehiculo}</td>
        <td>{this.props.data.tipo}</td>
        <td>{this.props.data.estado}</td>
        <td>{this.darFormato(this.props.data.costo)}</td>
        <td>
          <Button variant="primary" title="Ver detalles" className="table-btn">
            <BsFillEyeFill className="icon" />
          </Button>
          <Button
            variant="success"
            title="Generar recibo"
            className="table-btn"
          >
            <BsFillPrinterFill className="icon" />
          </Button>
        </td>
      </tr>
    );
  }

  darFormato(valor) {
    const formatoDinero = new Intl.NumberFormat('es-CO', {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2
    });

    return formatoDinero.format(valor);
  }
}
