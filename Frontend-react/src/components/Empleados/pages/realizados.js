import React from "react";
import Header from "../../admin/header";
import Navempleados from "../navempleados"
import {Container,Table,Button,} from "react-bootstrap"
import axios from "axios";

class realizados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Servicios:[],
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
    this.obtenerServiciosRealizados();


  }

  obtenerServiciosRealizados(){

    axios.get('http://localhost:3001/servicio/listar')
    .then(Response =>{

      const servicios =  Response.data;
      this.setState({Servicios : servicios});
      this.filtrarServiciosRealizados(servicios);
    })



  }

  filtrarServiciosRealizados(servicios){

    const serviciosRealizados =  servicios.filter(servicios => {return servicios.estado === 'Realizado'});
    this.setState({Servicios: serviciosRealizados});




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
            {this.state.Servicios.map( servicio =>
            <tr>
              <td>{servicio.idVehiculo}</td>
              <td >{servicio.nombreCliente}</td>
              <td >{servicio.tipo}</td>
              <td>{servicio.costo}</td>
              <td>
              <Button variant="info"size="sm">Success</Button>{' '} 
      
              </td>
            </tr>
            )}
          </tbody>
        </Table>
        </Container>
      </Container>
    );
  }
}

export default realizados;
