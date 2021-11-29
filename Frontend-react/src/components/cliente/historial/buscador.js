import React from "react";
import { BsSearch } from "react-icons/bs";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default class Buscador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtro: ""
    }
    this.filtrarTabla = this.filtrarTabla.bind(this);
    this.updateFiltro = this.updateFiltro.bind(this);
  }

  filtrarTabla(e) {
    e.preventDefault();

    this.props.onFiltrarTabla(this.state.filtro.trim());
  }

  updateFiltro(e) {
    this.setState({ filtro: e.target.value });
  }

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl placeholder="Placa de vehículo" aria-describedby="btn-buscar" value={this.state.filtro} onChange={this.updateFiltro}/>
        <Button
          variant="outline-secondary"
          id="btn-buscar"
          onClick={this.filtrarTabla}
        >
          <BsSearch />
        </Button>
      </InputGroup>
    );
  }
}
