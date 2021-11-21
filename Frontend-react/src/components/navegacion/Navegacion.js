import "./navegacion.css";
import React from "react";
import { Container, Nav } from "react-bootstrap";
import Header from "../header/header";

export default class navegacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header />
        <Container id="container-navegacion">
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Pendientes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Procceso</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Pendientes</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Container>
    );
  }
}
