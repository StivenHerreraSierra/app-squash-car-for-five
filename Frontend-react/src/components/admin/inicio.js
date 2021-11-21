import React from "react";

import { Container } from "react-bootstrap";
import Header from "./header";

export default class AdminSite extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Menú Administración</h1>
      </Container>
    );
  }
}
