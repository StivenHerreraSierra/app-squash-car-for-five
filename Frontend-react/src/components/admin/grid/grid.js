import React from "react";
import { request } from "../../helper/helper";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
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

const estados = [
  { copyEstado: "Todos", indiceEstado: "1", buscarEstado: "" },
  { copyEstado: "Pendiente", indiceEstado: "2", buscarEstado: "Pendiente" },
  { copyEstado: "Iniciado", indiceEstado: "3", buscarEstado: "Iniciado" },
  { copyEstado: "Realizado", indiceEstado: "4", buscarEstado: "Realizado" },
  { copyEstado: "Cancelado", indiceEstado: "5", buscarEstado: "Cancelado" },
];

export default class DataGrig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      loading: false,
      seleccionEstado: 1,
      estado: "",
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
                    {this.props.mostrarInputBusqueda ? (
                      <SearchBar
                        {...props.searchProps}
                        placeholder="Ingrese número de documento"
                        srText=""
                      />
                    ) : (
                      <>
                        <ToggleButtonGroup className="mb-2" name="test">
                          {estados.map((estado, idx) => (
                            <ToggleButton
                              key={idx}
                              id={`radio-${idx}`}
                              type="radio"
                              variant="secondary"
                              name="radio"
                              value={estado.indiceEstado}
                              checked={
                                this.state.seleccionEstado ===
                                estado.indiceEstado
                              }
                              onChange={(e) => {
                                this.setState(
                                  {
                                    estado:
                                      estados[e.currentTarget.value - 1]
                                        .buscarEstado,
                                  },
                                  () =>
                                    props.searchProps.onSearch(
                                      this.state.estado
                                    )
                                );
                              }}
                            >
                              {estado.copyEstado}
                            </ToggleButton>
                          ))}
                        </ToggleButtonGroup>
                      </>
                    )}

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
