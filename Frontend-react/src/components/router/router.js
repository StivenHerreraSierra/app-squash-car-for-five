import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Empleados from "../Empleados/empleados";
import Login from "../login/login";
import HistorialCliente from "../cliente/historial/HistorialCliente";
import AdminSite from "../admin/inicio";
import CrearEmpleado from "../admin/crearEmpleado";
import EliminarEmpleado from "../admin/eliminarEmpleado";
import EditarEmpleado from "../admin/editarEmpleado";
import Pendientes from "../Empleados/pages/pendientes";
import Procceso from "../Empleados/pages/procceso";
import Realizados from "../Empleados/pages/realizados";

import Registro from "../registro/registro";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={["/historialCliente"]}
          component={HistorialCliente}
        />
        <Route exact path={["/admin"]} component={AdminSite} />
        <Route exact path={["/crear-empleado"]} component={CrearEmpleado} />
        <Route
          exact
          path={["/eliminar-empleado"]}
          component={EliminarEmpleado}
        />
        <Route exact path={["/editar-empleado"]} component={EditarEmpleado} />
        <Route
          exact
          path={["/", "/login", "/login-empleados"]}
          component={Login}
        />
        <Route exact path={["/empleados"]} component={Empleados} />
        <Route exact path={["/pendientes"]} component={Pendientes} />
        <Route exact path={["/procceso"]} component={Procceso} />
        <Route exact path={["/realizados"]} component={Realizados} />

        <Route exact path={["/registro"]} component={Registro} />
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
