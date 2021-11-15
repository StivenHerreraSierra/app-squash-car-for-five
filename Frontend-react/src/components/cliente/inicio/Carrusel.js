import React from "react";
import { Carousel } from "react-bootstrap";
import ImagenOferta from "../../../resources/images/ofertasBackground.jpg";

export default class Carrusel extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              src={ImagenOferta}
              alt="Primer oferta"
              height="500px"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Primer oferta</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              src={ImagenOferta}
              alt="Segunda oferta"
              height="500px"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Segunda oferta</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              src={ImagenOferta}
              alt="Tercera oferta"
              height="500px"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Tercer oferta</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
