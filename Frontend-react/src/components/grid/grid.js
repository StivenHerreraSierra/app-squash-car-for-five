import React from "react";
import { request } from "../helper/helper";
import BootstrapTable from "react-bootstrap-table-next";

export default class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <BootstrapTable
          keyField="numeroDocumento"
          data={this.state.rows}
          columns={this.props.columns}
        />
      </>
    );
  }
}
