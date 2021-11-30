import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FaUserPlus, FaUserMinus, FaUserEdit } from "react-icons/fa";
import { ImExit } from "react-icons/im";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      esHome: false,
    };
  }

  componentDidMount() {
    const esHome = window.location.pathname !== "/admin";
    this.setState({ esHome: esHome });
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
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/crear-empleado">
                  <span>
                    <FaUserPlus />
                    {"\t"}Crear empleado
                  </span>
                </Nav.Link>
                <Nav.Link href="/editar-empleado">
                  <span>
                    <FaUserEdit />
                    {"\t"}Editar empleado
                  </span>
                </Nav.Link>
                <Nav.Link href="/eliminar-empleado">
                  <span>
                    <FaUserMinus />
                    {"\t"}Eliminar empleado
                  </span>
                </Nav.Link>
                {this.state.esHome && (
                  <Nav.Link href="/admin">
                    <span>
                      <AiFillHome />
                      {"\t"}Volver a página inicial
                    </span>
                  </Nav.Link>
                )}
                <Nav.Link href="/login-empleados">
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
