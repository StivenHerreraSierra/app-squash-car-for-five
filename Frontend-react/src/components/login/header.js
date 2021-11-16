import React from "react";

import { Container, Navbar } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";



export default class Login extends React.Component {
  render() {
    return (
      <Navbar expand="lg" bg="primary" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Squash Car</Navbar.Brand>
          <Navbar.Brand href="/acercaDe" title="Acerca de"><AiOutlineQuestionCircle/></Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
