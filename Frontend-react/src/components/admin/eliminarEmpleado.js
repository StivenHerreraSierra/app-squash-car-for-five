import React from "react";
import {
  Card,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Header from "./header";
import { BsSearch } from "react-icons/bs";
import "./admin.css";

export default class EliminarEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existeEmpleado: false,
    };
  }
  verificarEmpleado() {    
    this.setState({ existeEmpleado: true });
  }
  render() {
    return (
      <Container>
        <Header />
        <h1>Eliminar empleado</h1>
        <Card id="eliminar-empleado-card">
          <Card.Header>
            <InputGroup>
              <FormControl
                placeholder="Nombre cliente"
                aria-describedby="btn-buscar"
              />
              <Button
                variant="outline-secondary"
                id="btn-buscar"
                onClick={() => {
                  this.verificarEmpleado();
                }}
              >
                <BsSearch />
              </Button>
            </InputGroup>
          </Card.Header>
          {this.state.existeEmpleado && (<Card.Body>
            <Card.Title>Información del empleado</Card.Title>
            <Card.Text>
              <br />
              <b>Nombre(s) y apellidos</b>
              <br />
              Nombre Apellido1 Apellido2
              <br />
              <br />
              <b>Documento</b>
              <br />
              CC 111111
              <br />
              <br />
              <b>Teléfono</b>
              <br />
              1111111111
              <br />
            </Card.Text>
            <Button variant="primary" type="submit" className="me-5">
              Eliminar
            </Button>
            <Button variant="danger" type="submit" href="/admin">
              Cancelar
            </Button>
          </Card.Body>)}
        </Card>
      </Container>
    );
  }
}
