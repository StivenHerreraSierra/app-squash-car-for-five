import React from "react";
import Cookies from "universal-cookie";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FaUserPlus, FaUserMinus, FaUserEdit } from "react-icons/fa";
import { ImExit } from "react-icons/im";

const cookies = new Cookies();

export default class Header extends React.Component {
  cerrarSesion(key) {
    if (key === "Cerrar") {
      cookies.remove("_s", { path: "/" });
      sessionStorage.clear();
      window.location.replace("/login-empleados");
    }
  }

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
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                onSelect={(key) => this.cerrarSesion(key)}
              >
                {!this.props.Registrar && (
                  <Nav.Link href="/admin/crear-empleado">
                    <span>
                      <FaUserPlus />
                      {"\t"}Crear empleado
                    </span>
                  </Nav.Link>
                )}
                {!this.props.Editar && (
                  <Nav.Link href="/admin/editar-empleado">
                    <span>
                      <FaUserEdit />
                      {"\t"}Editar empleado
                    </span>
                  </Nav.Link>
                )}
                {!this.props.Eliminar && (
                  <Nav.Link href="/admin/eliminar-empleado">
                    <span>
                      <FaUserMinus />
                      {"\t"}Eliminar empleado
                    </span>
                  </Nav.Link>
                )}

                {!this.props.Home && (
                  <Nav.Link href="/admin">
                    <span>
                      <AiFillHome />
                      {"\t"}Volver a página inicial
                    </span>
                  </Nav.Link>
                )}
                {!this.props.Servicios && (
                  <Nav.Link href="/admin/historico">
                    <span>
                      <BsClockHistory />
                      {"\t"}Histórico servicios
                    </span>
                  </Nav.Link>
                )}
                <Nav.Link eventKey="Cerrar">
                  <span>
                    <ImExit />
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
