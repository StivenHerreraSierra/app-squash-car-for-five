import React from "react";
import Barra from "../BarraCliente";
import Formulario from "./Formulario";
import "./reservaStyle.css";
import { Container } from "react-bootstrap";

export default class Reservas extends React.Component {
  render() {
    return (
      <Container fluid className="m-4">
        <Barra />

        <header className="mt-3">
          <h1>Reservar servicio</h1>
          <p>
            En Squash Cars puede reservar un servicio para el día que lo
            necesite. Llene el siguiente formulario con tus datos y los de su
            vehículo:
          </p>
        </header>

        <section className="container-formulario">
            <h2>Información personal</h2>
            <Formulario></Formulario>
        </section>
      </Container>
    );
  }
}
