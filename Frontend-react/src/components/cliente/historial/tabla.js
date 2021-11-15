import React from "react";
import { Table, Button } from "react-bootstrap";
import { BsFillEyeFill, BsFillPrinterFill } from "react-icons/bs";

export default class Tabla extends React.Component {
  render() {
    return (
      <Table hover striped>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha</th>
            <th scope="col">Placa</th>
            <th scope="col">Tipo vehículo</th>
            <th scope="col">Estado</th>
            <th scope="col">Costo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2021/07/14</td>
            <td>ABC-123</td>
            <td>Automóvil</td>
            <td>Finalizado</td>
            <td>$15.000</td>
            <td>
              <Button
                variant="primary"
                title="Ver detalles"
                className="table-btn"
              >
                <BsFillEyeFill class="icon" />
              </Button>
              <Button
                variant="success"
                title="Generar recibo"
                className="table-btn"
              >
                <BsFillPrinterFill class="icon" />
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2021/08/12</td>
            <td>DEF-456</td>
            <td>Motocicleta</td>
            <td>En proceso</td>
            <td>$15.000</td>
            <td>
              <Button
                variant="primary"
                title="Ver detalles"
                className="table-btn"
              >
                <BsFillEyeFill class="icon" />
              </Button>
              <Button
                variant="success"
                title="Generar recibo"
                className="table-btn"
              >
                <BsFillPrinterFill class="icon" />
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>2021/03/09</td>
            <td>GHI-789</td>
            <td>Otros</td>
            <td>Reservado</td>
            <td>$15.000</td>
            <td>
              <Button
                variant="primary"
                title="Ver detalles"
                className="table-btn"
              >
                <BsFillEyeFill class="icon" />
              </Button>
              <Button
                variant="success"
                title="Generar recibo"
                className="table-btn"
              >
                <BsFillPrinterFill class="icon" />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
