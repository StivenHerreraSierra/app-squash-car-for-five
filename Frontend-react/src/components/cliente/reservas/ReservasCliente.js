import React from "react";
import Barra from "../BarraCliente";
import FormularioCliente from "./FormularioCliente";
import FormularioServicio from "./FormularioServicio";
import "./reservaStyle.css";
import { Container, Button, Modal } from "react-bootstrap";
import Axios from "axios";
import { APIHOST as host} from '../../../app.json'
import Swal from 'sweetalert2';

export default class Reservas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: {
        idCliente: "",
        nombrecliente: "",
      },
      servicio: {
        fecha: "",
        placa: "",
        tipoVehiculo: "Automóvil",
        tipoLavado: "Convencional",
        observaciones: "",
        
      },
      show: false
    };

    this.onFechaChange = this.onFechaChange.bind(this);
    this.onPlacaChange = this.onPlacaChange.bind(this);
    this.onTipoVehiculoChange = this.onTipoVehiculoChange.bind(this);
    this.onTipoLavadoChange = this.onTipoLavadoChange.bind(this);
    this.onObservacionChange = this.onObservacionChange.bind(this);

    this.mostrarModalConfirmacion = this.mostrarModalConfirmacion.bind(this);
    this.ocultarModalConfirmacion = this.ocultarModalConfirmacion.bind(this);
    this.registrarServicio = this.registrarServicio.bind(this);

    this.limpiarCampos = this.limpiarCampos.bind(this);
  }

  componentDidMount() {
    this.limpiarCampos();

    this.setState({
      cliente: {
        idCliente: sessionStorage.getItem('clienteNumeroDocumento'),
        nombreCliente: sessionStorage.getItem('clienteNombre')
      }
    });
  }

  onFechaChange(nuevaFecha) {
    this.setState({
      servicio: {
        fecha: nuevaFecha,
        placa: this.state.servicio.placa,
        tipoVehiculo: this.state.servicio.tipoVehiculo,
        tipoLavado: this.state.servicio.tipoLavado,
        observaciones: this.state.servicio.observaciones,
        
      },
    });
  }

  onPlacaChange(nuevaPlaca) {
    this.setState({
      servicio: {
        fecha: this.state.servicio.fecha,
        placa: nuevaPlaca,
        tipoVehiculo: this.state.servicio.tipoVehiculo,
        tipoLavado: this.state.servicio.tipoLavado,
        observaciones: this.state.servicio.observaciones,
        
      },
    });
  }

  onTipoVehiculoChange(nuevoTipoVehiculo) {
    this.setState({
      servicio: {
        fecha: this.state.servicio.fecha,
        placa: this.state.servicio.placa,
        tipoVehiculo: nuevoTipoVehiculo,
        tipoLavado: this.state.servicio.tipoLavado,
        observaciones: this.state.servicio.observaciones,
        
      },
    });
  }

  onTipoLavadoChange(nuevoTipoLavado) {
    this.setState({
      servicio: {
        fecha: this.state.servicio.fecha,
        placa: this.state.servicio.placa,
        tipoVehiculo: this.state.servicio.tipoVehiculo,
        tipoLavado: nuevoTipoLavado,
        observaciones: this.state.servicio.observaciones,
        
      },
    });
  }

  onObservacionChange(nuevaObservacion) {
    this.setState({
      servicio: {
        fecha: this.state.servicio.fecha,
        placa: this.state.servicio.placa,
        tipoVehiculo: this.state.servicio.tipoVehiculo,
        tipoLavado: this.state.servicio.tipoLavado,
        observaciones: nuevaObservacion,
      },
    });
  }

  mostrarModalConfirmacion() {
    this.setState({ show: true });
  }

  ocultarModalConfirmacion() {
    this.setState({ show: false });
  }

  registrarServicio() {
    Axios.post(`${host}/servicio/crear`,
      {
        cliente: this.state.cliente,
        servicio: this.state.servicio
      }
    )
    .then(response => {
      console.log(response.data);
      this.ocultarModalConfirmacion();

      this.mostrarAlerta(
        'info',
        'Registro exitoso',
        'La reserva fue registrada'
      );
      this.limpiarCampos();
    })
    .catch(err => {
      console.error(err.message)
      this.ocultarModalConfirmacion();

      this.mostrarAlerta(
        'error',
        'Registro incorrecto',
        'Hubo un error durante el registro',
        err.message
      );
    });
  }

  mostrarAlerta(icon, title, text, footer) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      footer: footer
    });
  }

  limpiarCampos() {
    this.setState({
      servicio: {
        fecha: '',
        placa: '',
        tipoVehiculo: '',
        tipoLavado: '',
        observaciones: '',
        empleadoEncargado: ''
      },
    });
  }

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
          <FormularioCliente
            cliente={this.state.cliente}
            className="formulario"
          ></FormularioCliente>

          <hr />

          <h2>Información del servicio</h2>
          <FormularioServicio
            servicio={this.state.servicio}
            className="formulario"
            onFechaChange={this.onFechaChange}
            onPlacaChange={this.onPlacaChange}
            onTipoVehiculoChange={this.onTipoVehiculoChange}
            onTipoLavadoChange={this.onTipoLavadoChange}
            onObservacionChange={this.onObservacionChange}
          ></FormularioServicio>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
            <button className="btn btn-secondary" type="button" onClick={this.limpiarCampos}>
              Limpiar
            </button>

            <Button
              className="me-md-2"
              variant="primary"
              onClick={this.mostrarModalConfirmacion}
            >
              Reservar
            </Button>

            <Modal show={this.state.show} onHide={this.ocultarModalConfirmacion} centered>
              <Modal.Header closeButton>
                <Modal.Title>¿Desea confirmar la reserva?</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                Una vez confirmada será registrada y cualquier modificación en
                la misma debe realizarse en el local.
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.ocultarModalConfirmacion}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={this.registrarServicio}>
                  Confirmar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </section>
      </Container>
    );
  }
}
