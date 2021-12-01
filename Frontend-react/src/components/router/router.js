import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Empleados from "../Empleados/empleados";
import Login from "../login/login";
import HistorialCliente from "../cliente/historial/HistorialCliente";
import ReservarCliente from "../cliente/reservas/ReservasCliente";
import AdminSite from "../admin/inicio";
import CrearEmpleado from "../admin/crearEmpleado";
import EliminarEmpleado from "../admin/eliminarEmpleado";
import EditarEmpleado from "../admin/editarEmpleado";
import Pendientes from "../Empleados/pages/pendientes";
import Procceso from "../Empleados/pages/procceso";
import Realizados from "../Empleados/pages/realizados";
import PrivateRoute from "../Auth/PrivateRoute";

import Registro from "../registro/registro";
import Clientes from "../cliente/index";
import pendientes from "../Empleados/pages/pendientes";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={["/", "/login", "/login-empleados"]}
          component={Login}
        />
        {/*PrivateRoute para rutas que no deben ser accedidas si no estan con token */}
        <Route
          exact
          path={["/historialCliente"]}
          component={HistorialCliente}
        />
        <Route exact path={["/reservar"]} component={ReservarCliente} />
        <Route exact path={["/admin"]} component={AdminSite} />
        <PrivateRoute exact path={["/admin"]} component={AdminSite} />
        <Route exact path={["/crear-empleado"]} component={CrearEmpleado} />
        <Route
          exact
          path={["/eliminar-empleado"]}
          component={EliminarEmpleado}
        />
        <Route exact path={["/editar-empleado"]} component={EditarEmpleado} />
        <Route exact path={["/empleados"]} component={pendientes} />
        <Route exact path={["/pendientes"]} component={Pendientes} />
        <Route exact path={["/procceso"]} component={Procceso} />
        <Route exact path={["/realizados"]} component={Realizados} />

        <Route exact path={["/registro"]} component={Registro} />
        <Route exact path={["/clientes"]} component={Clientes} />
        <Route
          path={"*"}
          component={() => (
            <h2 style={{ marginTop: 250 }}>
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
