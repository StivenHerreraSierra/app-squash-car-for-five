import React from "react";
import Header from "./header";
import Navempleados from "../navempleados";
import { Container, Button, Table, Modal } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import Ventanamodal from "./ventanamodal";
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
      empleadoEncargado: sessionStorage.getItem("nombreempleado"),
      estadoModal2: false,
      estadoModal3: false,
    };
  }

  componentDidMount() {
    const servicios = [];  
    servicios.push({
      id: this.state.id,
      placa: this.state.idVehiculo,
      nombre: this.state.nombreCliente,
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
    const empleadoEncargado = this.state.empleadoEncargado;
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
      empleadoEncargado,
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
      this.setState({estadoModal3: false})


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
    const empleadoEncargado = this.state.empleadoEncargado;

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
      empleadoEncargado,
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
      this.setState({estadoModal2 : false})
      console.log(this.state.Servicios)

  }

  
  cambiarEstadoModal2(estadoModal2){
    
    const estadomodal2 = !estadoModal2;
    this.setState({estadoModal2:estadomodal2})
    console.log(estadomodal2)
    

  }

  cambiarEstadoModal3(estadoModal3){
    
    const estadomodal3 = !estadoModal3;
    this.setState({estadoModal3:estadomodal3})
    console.log(estadomodal3)
    

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
              <Button variant="ligth" size="sm"
               onClick={() => this.cambiarEstadoModal3(this.state.estadoModal3)}
              
              > 
                    <FcCancel />
                  </Button>
                  <Button
                    variant="ligth"
                    size="sm"
                    onClick={() => this.cambiarEstadoModal2(this.state.estadoModal2)}>
                    <FcCheckmark />
                  </Button>
               </ td>
              </tr> 
            
            )}

            </thead>
            <tbody></tbody>
          </Table>

          <Ventanamodal
             estadoModal1 = {this.state.estadoModal2}
             title = "Completar SERVICIO"
                
          >
          <Modal.Body>
           <p> ¿Estas seguro que has completado el Lavado?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.cambiarEstadoModal2(this.state.estadoModal2) } >
              Cerrar
            </Button>
            <Button variant="success" onClick={()=> this.RealizadoLAvado() }>FINALIZAR</Button>
          </Modal.Footer>
            
                
            
            </Ventanamodal>      

          <Ventanamodal
             estadoModal1 = {this.state.estadoModal3}
             title = "Cancelar SERVICIO"
                
          >
          <Modal.Body>
           <p> ¿Estas seguro que deseas cancelar el Lavado?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.cambiarEstadoModal2(this.state.estadoModal3) } >
              Cerrar
            </Button>
            <Button variant="danger" onClick={()=> this.cancelarLAvado() }>Cancelar</Button>
          </Modal.Footer>
            
                
            
            </Ventanamodal>        


        </Container>
      </Container>
    );
  }
}

export default procceso;
