import React from "react";
import { Container } from "react-bootstrap";
import BarraCliente from "../BarraCliente";
import Carrusel from "./Carrusel";
import PanelServicios from "./PanelServicios";

export default class InicioCliente extends React.Component {
    render() {
        return (
            <Container fluid>
                <BarraCliente />

                <Carrusel />

                <PanelServicios />
            </Container>
        );
    }
}