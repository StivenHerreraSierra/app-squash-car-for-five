import React from "react";
import { BsSearch } from "react-icons/bs"
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default class Buscador extends React.Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl placeholder="Servicio" aria-describedby="btn-buscar" />
          <Button variant="outline-secondary" id="btn-buscar">
            <BsSearch />
          </Button>
      </InputGroup>
    );
  }
}
