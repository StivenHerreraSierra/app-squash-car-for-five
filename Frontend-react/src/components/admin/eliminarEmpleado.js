import React from "react";

import { Container, Form, Button } from "react-bootstrap";
import Header from "./header";
//import "./login.css";

export default class EliminarEmpleado extends React.Component {  
  render() {
    return (
      <Container>
        <Header />
        <h1>Eliminar empleado</h1>
      </Container>
    );
  }
}