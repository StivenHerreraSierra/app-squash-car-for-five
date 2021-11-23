import React from "react";

import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";

export default class Header extends React.Component {
  render() {
    return (
      <Navbar expand={false} bg="primary" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/admin">Squash Car</Navbar.Brand>
          <Navbar.Toggle aria-controls="menuAdmin" />
          <Navbar.Offcanvas
            id="menuAdmin"
            aria-labelledby="menuAdminLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="menuAdminLabel">
                Administración
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/crear-empleado">
                  <span>
                    <AiOutlineUserAdd />
                    {"\t"}Crear empleado
                  </span>
                </Nav.Link>
                <Nav.Link href="/eliminar-empleado">
                  <span>
                    <AiOutlineUserDelete />
                    {"\t"}Eliminar empleado
                  </span>
                </Nav.Link>
                <Nav.Link href="/empleados">
                  <span>
                    <IoExitOutline />
                    {"\t"}Cerrar sesion
                  </span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}
