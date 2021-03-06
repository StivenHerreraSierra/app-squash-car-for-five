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
      info: [],
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
      estadoModal4: false,
      estadoModal5: "",
      
     

    };
  }

  
    componentDidMount(){
      // declaro el estado del modal a falso.
      

    
    axios.get('http://localhost:3001/servicio/listar')
        .then(response => {
          const Servicios = response.data;
          console.log(Servicios)
          this.filtrarServiciosPendientes(Servicios)
          this.filtrarServicioIniciado(Servicios);
        }); 

      


        
    
    
        

    
    
    
      }


    filtrarServiciosPendientes(servicios){
      console.log(servicios);
      const serviciosPendientes = servicios.filter(servicio => {return servicio.estado === 'Pendiente' }) 

      this.setState({Servicios: serviciosPendientes});
      console.log(serviciosPendientes)

    }

    filtrarServicioIniciado(servicios){


      //------se filtran los servicios del empleado y que esten en estado Iniciado.
      const servciosIniciados =  servicios.filter(servicio => {return servicio.empleadoEncargado === this.state.empleadoEncargado && servicio.estado === 'Iniciado'});
      servciosIniciados.map(servicio => {

        localStorage.setItem("id", servicio.id)
        localStorage.setItem("id_clientes", servicio.id_cliente);
        localStorage.setItem("placa", servicio.idVehiculo);
        localStorage.setItem("Nombre" ,servicio.nombreCliente);
        localStorage.setItem("tipoLavado", servicio.tipo);
        localStorage.setItem("costo", servicio.costo );
        localStorage.setItem("estado", servicio.estado);
        localStorage.setItem("observaciones", servicio.observaciones);
        localStorage.setItem("fecha", servicio.fecha);

      })
      



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
        localStorage.setItem("fecha", servicio.fecha)
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
    

    cambiarEstadoModal1(estadoModal1, servicioAIniciar, estadoModal4){
 
      if(localStorage.length > 0){
        this.cambiarEstadomodal4(estadoModal4);

      }
      else{
      const estadomodal1 = !estadoModal1;
      this.setState({estadoModal1:estadomodal1})

      if(estadoModal1 === false){
      localStorage.setItem("servicioAIniciar", servicioAIniciar);
      }else{

        localStorage.setItem("servicioAIniciar", "")

      }
    }
  }


   cambiarEstadomodal4(estadoModal4){

    const estadomodal4= !estadoModal4;
    this.setState({estadoModal4 : estadomodal4});

   } 
  
   
   cambiarEstadomodal5(servicio, estadoModal5){
    
    this.setState({info : servicio});
    
   
    this.cambiarestado(estadoModal5);

  console.log(this.state.estadoModal5)
     


   } 

   cambiarestado(estadoModal5){
   const estadomodal5 = !estadoModal5;
   this.setState({estadoModal5 : estadomodal5})
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
              <Button variant="ligth"size="sm" onClick={() => this.cambiarEstadoModal1(this.state.estadoModal1, servicio.id, this.state.estadoModal4)}> <FcCheckmark/></Button>
              <Button variant="ligth"size="sm" onClick={()=>this.cambiarEstadomodal5(servicio, this.state.estadoModal5)}><BsFillInfoCircleFill/></Button>
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
           <p> ??Estas seguro de que desear iniciar el Lavado?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.cambiarEstadoModal1(this.state.estadoModal1) } >
              Close
            </Button>
            <Button variant="primary" onClick={()=> this.iniciarLavado(localStorage.getItem("servicioAIniciar"), this.state.Servicios) }>INICIAR</Button>
          </Modal.Footer>
           
           </Ventanamodal>

           <Ventanamodal 
          estadoModal1 = {this.state.estadoModal4}
          title = "YA TIENES UN SERVICIO INICIADO"
      
        
        >
          <Modal.Body>
           <p> ??Ya tienes un servicio iniciado!, debes de completar o cancelar el servicio actual.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.cambiarEstadomodal4(this.state.estadoModal4) } >
              Close
            </Button>
    
          </Modal.Footer>
           
           </Ventanamodal>    

           <Ventanamodal 
          estadoModal1 = {this.state.estadoModal5}
          title = "Informacion Servicio"
      
        
        >
          <Modal.Body>
           <p> NombreCliente : {this.state.info.nombreCliente}</p>
           <p> placa: {this.state.info.idVehiculo}</p>
           <p> tipo-lavado: {this.state.info.tipo} </p>
           <p> fecha: {this.state.info.fecha}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary"   >
              Close
            </Button>
    
          </Modal.Footer>
           
           </Ventanamodal>    

                 



        </Container>
      </Container>
    );
  }
}

export default pendientes;
