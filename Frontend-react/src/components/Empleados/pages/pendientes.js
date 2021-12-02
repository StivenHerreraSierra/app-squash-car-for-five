import React from "react";
import Navempleados from "../navempleados";
import Header from "./header";
import { Container, Table, Button,Modal } from "react-bootstrap";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import "./estilos-pendientes.css";
import Ventanamodal from "./ventanamodal";    
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
      empleadoEncargado: "",
      estadoModal1:  false,
   
      
     

    };
  }

  
    componentDidMount(){
      // declaro el estado del modal a falso.
      

    
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







    iniciarLavado(idServcio, servicios){
       
      
      const id = parseInt(idServcio);
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

       this.setState({estadoModal1: false}); 

     




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
      const empleadoEncargado = sessionStorage.getItem("nombreempleado");
  
      const servicio = {
        id,
        idCliente, //es el nro de documento.
        nombreCliente,
        idVehiculo,
        estado,  // se hace el cambio del estado del servicio.
        tipo,
        costo,
        observaciones,
        empleadoEncargado,
      };

      console.log(servicio)
  
      //update estado in bd.
  
      axios.put(`http://localhost:3001/servicio/actualizar/${servicio.id}` , servicio)
      .then(response => {
        console.log("se ha actualizado con exito" + response);
      
      }); 
    }
    

    cambiarEstadoModal1(estadoModal1, servicioAIniciar){

      const estadomodal1 = !estadoModal1;
      this.setState({estadoModal1:estadomodal1})

      if(estadoModal1 === false){
      localStorage.setItem("servicioAIniciar", servicioAIniciar);
      }else{

        localStorage.setItem("servicioAIniciar", "")

      }


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
              <Button variant="ligth"size="sm" onClick={() => this.cambiarEstadoModal1(this.state.estadoModal1, servicio.id)}> <FcCheckmark/></Button>
              <Button variant="ligth"size="sm"><BsFillInfoCircleFill/></Button>
               </td>
              </tr> 
            
            )}
          </tbody>
        </Table>


        <Ventanamodal 
          estadoModal1 = {this.state.estadoModal1}
          title = "INICIAR SERVICIO"
      
        
        >
          <Modal.Body>
           <p> ¿Estas seguro de que desear iniciar el Lavado?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.cambiarEstadoModal1(this.state.estadoModal1) } >
              Close
            </Button>
            <Button variant="primary" onClick={()=> this.iniciarLavado(localStorage.getItem("servicioAIniciar"), this.state.Servicios) }>INICIAR</Button>
          </Modal.Footer>
           
           </Ventanamodal>
        </Container>
      </Container>
    );
  }
}

export default pendientes;
