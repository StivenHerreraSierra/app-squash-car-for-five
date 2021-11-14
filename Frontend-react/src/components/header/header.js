import React from "react";
import './header.css'
import { Nav, Container, Navbar,NavDropdown } from "react-bootstrap";
import { ImUser } from "react-icons/im";
import {BiExit  } from "react-icons/bi";
export default class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Squash Car</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
            <Navbar.Brand id="icono-usuario" href="#home">
            <ImUser size={25}/>
            </Navbar.Brand>    
            
            <NavDropdown title="nombre_usuario" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> <BiExit/> Cerrar Seccion</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
