import React from "react";
import { request } from "../../helper/helper";
import "./grid.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Loading from "../../Loading/Loading";

const { SearchBar } = Search;

export default class DataGrig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true });
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data, loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }
  render() {
    const options = {
      custom: true,
      totalSize: this.state.rows.length,
    };
    return (
      <>
        <Loading show={this.state.loading} />
        <ToolkitProvider
          keyField="_id"
          data={this.state.rows}
          columns={this.props.columns}
          search
        >
          {(props) => (
            <>
              <hr />
              <PaginationProvider pagination={paginationFactory(options)}>
                {({ paginationProps, paginationTableProps }) => (
                  <>
                    <SizePerPageDropdownStandalone {...paginationProps} />
                    <SearchBar
                      {...props.searchProps}
                      placeholder="Ingrese número de documento"
                      srText=""
                    />

                    <BootstrapTable
                      keyField="_id"
                      data={this.state.rows}
                      columns={this.props.columns}
                      {...paginationTableProps}
                      {...props.baseProps}
                    />
                    <PaginationListStandalone {...paginationProps} />
                  </>
                )}
              </PaginationProvider>
            </>
          )}
        </ToolkitProvider>
      </>
    );
  }
}
