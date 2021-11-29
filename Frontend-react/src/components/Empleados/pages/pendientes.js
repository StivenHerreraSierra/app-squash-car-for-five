import React from "react";
import Navempleados from "../navempleados";
import Header from "../../admin/header";
import { Container, Table, Button } from "react-bootstrap";
import "./estilos-pendientes.css"
import Axios from "axios"
import axios from "axios";





class pendientes extends React.Component {  


  constructor(props) {
    super(props);
    this.state = {
      Servicios: [],
      id: "",
      idCliente: "",
      nombreCliente: "",
      idVehiculo: "",
      fecha: "",
      estado: "",
      tipo: "",
      costo: "",
      observaciones: "", 
     

    };
  }

  
    componentDidMount(){
    
    axios.get('http://localhost:3001/servicio/listar')
        .then(response => console.log(response.data));
    
    

    }


  



  render() {
    return (
      <Container>
        <Header />
        <Navempleados />
        <Container  id="table-contenido">
            <div  >
            <h2 class="texto-pendientes"> PENDIENTES </h2>
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
              <Button variant="success"size="sm">Success</Button>{' '} 
              <Button variant="danger"size="sm">Warning</Button>{' '} 
              <Button variant="info" size="sm">Info</Button>{' '}
              </td>
            </tr>
          </tbody>
        </Table>
        </Container>
      </Container>
    );
  }
}

export default pendientes;
