import React from "react";
import { Pagination } from "react-bootstrap";

export default class PaginacionTabla extends React.Component {
  render() {
    return (
      <Pagination>
        <Pagination.Prev>Anterior</Pagination.Prev>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Next>Siguiente</Pagination.Next>
      </Pagination>
    );
  }
}
