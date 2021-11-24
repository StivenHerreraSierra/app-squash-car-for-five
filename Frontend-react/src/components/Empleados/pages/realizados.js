import React from "react";
import Header from "../../admin/header";
import Navempleados from "../navempleados"
import {Container,Table,Button,} from "react-bootstrap"
class realizados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header />
        <Navempleados />
        <Container  id="table-contenido">
            <div  >
            <h2 class="texto-pendientes"> REALIZADOS </h2>
            </div>
        <Table striped hover>
          <thead>
            <tr>
              <th>Placa </th>
              <th>Nombre Del Cliente</th>
              <th>Tipo De Lavado</th>
              <th>Tipo De Vehiculo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td >Larry the Bird</td>
              <td >Larry the Bird</td>
              <td>@twitter</td>
              <td>
              <Button variant="info"size="sm">Success</Button>{' '} 
      
              </td>
            </tr>
          </tbody>
        </Table>
        </Container>
      </Container>
    );
  }
}

export default realizados;
