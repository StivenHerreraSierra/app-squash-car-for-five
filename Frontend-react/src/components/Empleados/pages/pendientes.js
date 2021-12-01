import React from "react";
import Navempleados from "../navempleados";
import Header from "../../admin/header";
import { Container, Table, Button } from "react-bootstrap";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import "./estilos-pendientes.css"

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
        .then(response => {
          const Servicios = response.data;
          console.log(Servicios)
          this.filtrarServiciosPendientes(Servicios)
        }); 


        
    
    
        

    }


    filtrarServiciosPendientes(servicios){
      console.log(servicios);
      const serviciosPendientes = servicios.filter(servicio => {return servicio.estado === 'Pendiente' }) 

      this.setState({Servicios: serviciosPendientes});
      console.log(serviciosPendientes)

    }







    iniciarLavado(id, servicios){
       //encontrar servicio.
       const servicio = servicios.filter(servicio =>{ return servicio.id === id})
       
      //cambiar la variable Estado.
   
      

       //asignar variables al localStorage
       servicio.map(servicio => {
        
        //cambiar la variable Estado.
        servicio.estado = 'Iniciado';
        
        localStorage.setItem("id", id)
        localStorage.setItem("id_clientes", servicio.id_cliente);
        localStorage.setItem("placa", servicio.idVehiculo);
        localStorage.setItem("Nombre" ,servicio.nombreCliente);
        localStorage.setItem("tipoLavado", servicio.tipo);
        localStorage.setItem("costo", servicio.costo );
        localStorage.setItem("estado", servicio.estado);
        localStorage.setItem("observaciones", servicio.observaciones);
     

       })

     
  
        // filtrar para eliminar del state
        const serviciosActualizados = servicios.filter((servicios) => {return servicios.id !== id })
        this.setState({Servicios:serviciosActualizados});

       this.ActualizarEstado(id);


     




    }



    
    ActualizarEstado(){

      this.setState({ estado: 'Iniciado' });

      const id =localStorage.getItem("id") ;
      const idCliente = localStorage.getItem("id_clientes");
      const nombreCliente = localStorage.getItem("Nombre");
      const idVehiculo = localStorage.getItem("placa");
      const tipo = localStorage.getItem("tipoLavado");
      const costo = localStorage.getItem("costo");
      const observaciones = localStorage.getItem("observaciones");
      const estado = localStorage.getItem("estado");
  
      const servicio = {
        id,
        idCliente, //es el nro de documento.
        nombreCliente,
        idVehiculo,
        estado,  // se hace el cambio del estado del servicio.
        tipo,
        costo,
        observaciones,
      };

      console.log(servicio)
  
      //update estado in bd.
  
      axios.put(`http://localhost:3001/servicio/actualizar/${servicio.id}` , servicio)
      .then(response => {
        console.log("se ha actualizado con exito" + response);
      
      }); 
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
              <th>Costo</th>
            </tr>
          </thead>
          <tbody>
            { this.state.Servicios.map(
              servicio => 
              
              <tr key={servicio.id}>
              <td>{servicio.idVehiculo}</td>
              <td>{servicio.nombreCliente}</td>
              <td>{servicio.tipo}</td>
              <td>{servicio.costo}</td>
              <td>
              <Button variant="ligth"size="sm" onClick={() =>this.iniciarLavado(servicio.id, this.state.Servicios)}><FcCheckmark/></Button>
              <Button variant="ligth"size="sm"><BsFillInfoCircleFill/></Button>
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

export default pendientes;
