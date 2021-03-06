import React from "react";
import "./inicioStyles.css"
import { Nav, Container, Navbar,NavDropdown } from "react-bootstrap";
import { ImUser } from "react-icons/im";
import { BiExit  } from "react-icons/bi";
import { BsHouseDoorFill, BsFillClockFill, BsCalendar2Fill } from "react-icons/bs";
import Cookies from "universal-cookie";

export default class header extends React.Component {

  cerrarseccion(){
    const cookies = new Cookies();

    //eliminamos la cookies.
    if (cookies.get("_s")) {
      cookies.remove("_s");
    }

    sessionStorage.clear();
    //lo rederigimos a la login.
    window.location.href = '/login';

  };

  render() {
    return (
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Squash Car</Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/homeCliente"><BsHouseDoorFill /> Inicio</Nav.Link>
              <Nav.Link className="nav-link" href="/historialCliente"><BsFillClockFill /> Historial</Nav.Link>
              <Nav.Link className="nav-link" href="/reservar"><BsCalendar2Fill /> Reserva</Nav.Link>
            </Nav>
            
            <Nav>
              <Navbar.Brand id="icono-usuario" href="#home">
                <ImUser size={25}/>
              </Navbar.Brand>    
            
              <NavDropdown title={sessionStorage.getItem('clienteNombre')} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => this.cerrarseccion()}> <BiExit/> Cerrar Seccion</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
