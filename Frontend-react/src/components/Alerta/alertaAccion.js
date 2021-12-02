import React from "react";
import { Alert } from "react-bootstrap";
//tipos alertas 'success' | 'danger'

const tipoAlert = ["success", "danger"];

export default class AlertaAccion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, text: "" };
  }

  componentWillReceiveProps(props) {
    this.setState({
      show: props.show,
      text: props.text,
    });
  }

  render() {
    return (
      <Alert
        className="py-0"
        show={this.state.show}
        variant={tipoAlert[this.props.tipoAlerta]}
        onClose={() => this.setState({ show: false })}
      >
        <p className="my-2">{this.state.text}</p>
      </Alert>
    );
  }
}
