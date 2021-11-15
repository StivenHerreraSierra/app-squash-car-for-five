import React from "react";
import { Card } from "react-bootstrap";

export default class CardServicio extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} class="cardService">
        <div class="pendiente"></div>
        <Card.Body>
          <Card.Title>Otros GHI-789</Card.Title>
          <Card.Text>
            <time class="text-muted" datetime="2021/03/09">2021/03/09</time>
            <p class="card-text">Pendiente</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
