import React from "react";
import { Card } from "react-bootstrap";

export default class CardServicio extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} className="cardService">
        <div className="pendiente"></div>
        <Card.Body>
          <Card.Title>Otros GHI-789</Card.Title>
          <Card.Text>
            <time className="text-muted" datetime="2021/03/09">2021/03/09</time>
            <p className="card-text">Pendiente</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
