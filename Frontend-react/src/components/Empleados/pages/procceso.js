import React from "react";
import Header from "../../admin/header";
import Navempleados from "../navempleados";
import { Container, Button, Table } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import axios from "axios";

class procceso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Servicios: [],
      id: localStorage.getItem("id"),
      idCliente: localStorage.getItem("id_clientes"),
      nombreCliente: localStorage.getItem("Nombre"),
      idVehiculo: localStorage.getItem("placa"),
      fecha: "",
      estado: "",
      tipo: localStorage.getItem("tipoLavado"),
      costo: localStorage.getItem("costo"),
      observaciones: "",
    };
  }

  componentDidMount() {
    const servicios = [];  
    servicios.push({
      id: this.state.id,
      placa: this.state.idVehiculo,
      nombre: this.state.idVehiculo,
      costo: this.state.costo,
      tipo: this.state.tipo,
    });

    this.setState({Servicios:servicios})
  }

  cancelarLAvado() {
    // cambiar estado de la variable

    const id = this.state.id;
    const idCliente = this.state.idCliente;
    const nombreCliente = this.state.nombreCliente;
    const idVehiculo = this.state.idVehiculo;
    const fecha = "";
    const tipo = this.state.tipo;
    const costo = this.state.costo;
    const observaciones = this.state.observaciones;
    const estado = "Cancelado";

    const servicio = {
      id,
      idCliente, //es el nro de documento.
      nombreCliente,
      idVehiculo,
      fecha,
      estado, // se hace el cambio del estado del servicio.
      tipo,
      costo,
      observaciones,
    };

    //update estado in bd.

    axios
      .put(
        "http://localhost:3001/servicio/actualizar/" + this.state.id,
        servicio
      )
      .then((response) => {
        console.log("se ha actualizado con exito" + response);
      });


      this.setState({Servicios : []});
      this.limpiarSessionStorage();



  }

  RealizadoLAvado() {
    // cambiar estado de la variable

    const id = this.state.id;
    const idCliente = this.state.idCliente;
    const nombreCliente = this.state.nombreCliente;
    const idVehiculo = this.state.idVehiculo;
    const fecha = "";
    const tipo = this.state.tipo;
    const costo = this.state.costo;
    const observaciones = this.state.observaciones;
    const estado = "Realizado";

    const servicio = {
      id,
      idCliente, //es el nro de documento.
      nombreCliente,
      idVehiculo,
      fecha,
      estado, // se hace el cambio del estado del servicio.
      tipo,
      costo,
      observaciones,
    };

    //update estado in bd.

    axios
      .put(
        "http://localhost:3001/servicio/actualizar/" + this.state.id,
        servicio
      )
      .then((response) => {
        console.log("el servicio ha actualizado con exito" + response);
      });


      this.setState({Servicios : []});
      this.limpiarSessionStorage();



  }

  limpiarSessionStorage(){

    localStorage.clear();


  }


  render() {
    return (
      <Container>
        <Header />
        <Navempleados />
        <Container id="table-contenido">
          <div>
            <h2 class="texto-pendientes"> PROCCESO </h2>
          </div>
          <Table striped hover>
            <thead>
              <tr>
                <th>Placa </th>
                <th>Nombre Del Cliente</th>
                <th>Tipo De Lavado</th>
                <th>costo</th>
              </tr>

              { this.state.Servicios.map(
              servicio => 
              
              <tr key={servicio.id}>
              <td>{servicio.placa}</td>
              <td>{servicio.nombre}</td>
              <td>{servicio.tipo}</td>
              <td>{servicio.costo}</td>
              <td>
              <Button variant="ligth" size="sm"  onClick={() => this.cancelarLAvado()}> 
                    <FcCancel />
                  </Button>
                  <Button
                    variant="ligth"
                    size="sm"
                    onClick={() => this.RealizadoLAvado()}

                  >
                    <FcCheckmark />
                  </Button>
               </td>
              </tr> 
            
            )}

            </thead>
            <tbody></tbody>
          </Table>
        </Container>
      </Container>
    );
  }
}

export default procceso;
