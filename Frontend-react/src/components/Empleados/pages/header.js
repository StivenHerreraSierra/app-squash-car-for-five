import React from "react";
import { Container, Nav, Navbar, Offcanvas,NavDropdown } from "react-bootstrap";
import Cookies from "universal-cookie";
import { AiFillHome } from "react-icons/ai";
import "./estiloEmpleados.css";
import {
  FaUserPlus,
  FaUserMinus,
  FaUserEdit,
  FaUserCheck,
} from "react-icons/fa";
import { ImExit } from "react-icons/im";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreEmpleado: sessionStorage.getItem("nombreempleado"),

    };
  }
  

  cerrarseccion(){
    const cookies = new Cookies();

    //eliminamos la cookies.
    if (cookies.get("_s")) {
      cookies.remove("_s");
    }

    sessionStorage.clear();
    //lo rederigimos a la login.
    window.location.href = '/login-empleados';

  }

  render() {
    return (
   <Navbar fixed="top" expand="lg" bg="primary" variant="dark">
  <Container fluid>
  <Navbar.Brand href="#home">Squash Car</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
    </Nav>
    <Nav>
    <NavDropdown title={this.state.nombreEmpleado} class="navempleados" >
        <NavDropdown.Item onClick={() => this.cerrarseccion()}><ImExit/>Cerrar Seccion</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>  
        
    
    );
  }
}
