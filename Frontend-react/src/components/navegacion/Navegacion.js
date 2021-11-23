import "./navegacion.css";
import React from "react";
import { Container, Nav } from "react-bootstrap";
import Header from "../header/header";
import Pendientes from "../../pages/pendientes.js";
import Procceso from "../../pages/procceso.js";
import Realizados from "../../pages/realizados.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Navegacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header />
        <Container id="container-navegacion">
          <Router>
            <Nav justify variant="tabs" defaultActiveKey="/pendientes">
              <Nav.Item>
                <Nav.Link href="pendientes" eventKey="pendientes">
                  Pendientes
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/procceso" eventKey="procceso">
                  Proceso
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/realizados" eventKey="realizados">
                  Realizados
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Switch>
              <Route exact path="/pendientes" element={<Pendientes />}></Route>
              <Route exact path="/procceso" element={<Procceso />}></Route>
              <Route exact path="/realizados" element={<Realizados />}></Route>
            </Switch>
          </Router>
        </Container>
      </Container>
    );
  }
}
