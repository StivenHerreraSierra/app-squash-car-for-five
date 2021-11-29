import "./navegacion.css";
import React from "react";
import { Container } from "react-bootstrap";
import {

  Link,
  Router,
  Switch,

  Route,

  BrowserRouter,
  


} from "react-router-dom";



import Header from "../admin/header";
import Navegacion from "./navempleados";
import Pendientes from "./pages/pendientes";
import Procceso from "./pages/procceso";
import Realizados from "./pages/realizados";





class Empleados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        
      <Header/>
     
      <Navegacion/>
      <BrowserRouter>
        <Switch>
           <Route exact path="/pendientes" component={Pendientes}></Route>
        <Route path="/procceso" component={Procceso}></Route>
        <Route path="/realizados" component={Realizados}></Route>
             
             </Switch> 
          
          
          </BrowserRouter>
 
      </Container>
    );
  }
}

export default Empleados;
