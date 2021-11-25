import React from "react";
import Barra from "../BarraCliente";
import FormularioCliente from "./FormularioCliente";
import FormularioServicio from "./FormularioServicio";
import "./reservaStyle.css";
import { Container } from "react-bootstrap";

export default class Reservas extends React.Component {
  render() {
    return (
      <Container fluid>
        <Barra />

        <header>
          <h1 className="m-4 titulo">Reservar servicio</h1>
          <p>
            En Squash Cars puede reservar un servicio para el día que lo
            necesite. Llene el siguiente formulario con tus datos y los de su
            vehículo:
          </p>
        </header>

        <section className="container-formulario">
          <h2>Información personal</h2>
          <FormularioCliente className="formulario"></FormularioCliente>

          <hr />

          <h2>Información del servicio</h2>
          <FormularioServicio className="formulario"></FormularioServicio>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
            <button className="btn btn-secondary" type="button">
              Limpiar
            </button>

            <button
              className="btn btn-primary me-md-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#confirmacionModal"
            >
              Reservar
            </button>
          </div>
        </section>
      </Container>
    );
  }
}
