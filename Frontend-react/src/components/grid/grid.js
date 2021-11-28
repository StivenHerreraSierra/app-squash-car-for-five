import React from "react";
import { request } from "../helper/helper";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import Loading from "../loading/loading";

export default class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      rows: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ Loading: true });
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data, Loading: false });
      })
      .catch((err) => {
        this.setState({ Loading: false });
        console.error(err);
      });
  }

  render() {
    const options = {
      custom: true,
      totalSize: this.state.rows.length,
    };
    return (
      <>
        <Loading show={this.state.Loading} />
        <PaginationProvider pagination={paginationFactory(options)}>
          {({ paginationProps, paginationTableProps }) => (
            <div>
              <SizePerPageDropdownStandalone {...paginationProps} />
              <BootstrapTable
                keyField="id"
                data={this.state.rows}
                columns={this.props.columns}
                {...paginationTableProps}
              />
              <PaginationListStandalone {...paginationProps} />
            </div>
          )}
        </PaginationProvider>
      </>
    );
  }
}
