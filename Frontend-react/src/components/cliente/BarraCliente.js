import React from "react";
import "./inicioStyles.css";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { ImUser } from "react-icons/im";
import { BiExit } from "react-icons/bi";
import {
  BsHouseDoorFill,
  BsFillClockFill,
  BsCalendar2Fill,
} from "react-icons/bs";
import { request } from "../helper/helper";

export default class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    request
      .get("/cliente/login")
      .then((response) => {
        this.setState({ rows: response.data });
        alert(response.data[0].nombres);
      })
      .catch((err) => {
        console.error(err);
        alert("error");
      });
  }

  render() {
    return (
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Squash Car</Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/homeCliente">
                <BsHouseDoorFill /> Inicio
              </Nav.Link>
              <Nav.Link className="nav-link" href="/historialCliente">
                <BsFillClockFill /> Historial
              </Nav.Link>
              <Nav.Link className="nav-link" href="/reservar">
                <BsCalendar2Fill /> Reserva
              </Nav.Link>
            </Nav>

            <Nav>
              <Navbar.Brand id="icono-usuario" href="#home">
                <ImUser size={25} />
              </Navbar.Brand>

              <NavDropdown title="nombre" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">
                  {" "}
                  <BiExit /> Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
