import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navegacion from "../navegacion/Navegacion";
import Login from "../login/login";
import HistorialCliente from "../cliente/historial/HistorialCliente";
import AdminSite from "../admin/inicio";
import CrearEmpleado from "../admin/crearEmpleado";
import EliminarEmpleado from "../admin/eliminarEmpleado";
import EditarEmpleado from "../admin/editarEmpleado";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login", "/empleados"]} component={Login} />
        <Route exact path={["/navegacion"]} component={Navegacion} />
        <Route
          exact
          path={["/historialCliente"]}
          component={HistorialCliente}
        />
        <Route exact path={["/admin"]} component={AdminSite} />
        <Route exact path={["/crear-empleado"]} component={CrearEmpleado} />
        <Route exact path={["/eliminar-empleado"]} component={EliminarEmpleado} />
        <Route exact path={["/editar-empleado"]} component={EditarEmpleado} />
        <Route
          path={"*"}
          component={() => (
            <h2 style={{ marginTop: 200 }}>
              404
              <br />
              PAGINA NO ENCONTRADA
            </h2>
          )}
        />
      </Switch>
    </Router>
  );
}
