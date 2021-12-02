import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Empleados from "../Empleados/empleados";
import Login from "../login/login";
import HistorialCliente from "../cliente/historial/HistorialCliente";
import ReservarCliente from "../cliente/reservas/ReservasCliente";
import AdminSite from "../admin/inicio";
import AdminSiteServicios from "../admin/mostrarServicios";
import CrearEmpleado from "../admin/crearEmpleado";
import EliminarEmpleado from "../admin/eliminarEmpleado";
import EditarEmpleado from "../admin/editarEmpleado";
import Pendientes from "../Empleados/pages/pendientes";
import Procceso from "../Empleados/pages/procceso";
import Realizados from "../Empleados/pages/realizados";

//Manejo rutas
import PrivateRoute from "../Auth/PrivateRoute";
import PrivateRouteEmpleado from "../Auth/PrivateRouteEmpleado";
import PrivateRouteAdmin from "../Auth/PrivateRouteAdmin";
import PublicRoute from "../Auth/PublicRoute";


import Registro from "../registro/registro";
import Clientes from "../cliente/index";
import pendientes from "../Empleados/pages/pendientes";
import InicioClientes from "../cliente/inicio/InicioCliente";
import IndexClientes from "../cliente/index";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path={["/", "/login", "/login-empleados"]}
          component={Login}
        />
        {/*PrivateRoute para rutas que no deben ser accedidas si no estan con token */}
        <PrivateRoute
          exact
          path={["/historialCliente"]}
          component={HistorialCliente}
        />
        <PrivateRoute exact path={["/reservar"]} component={ReservarCliente} />
        <PrivateRouteAdmin exact path={["/admin"]} component={AdminSite} />
        <PrivateRouteAdmin
          exact
          path={["/admin/historico"]}
          component={AdminSiteServicios}
        />
        <PrivateRouteAdmin
          exact
          path={["/admin/crear-empleado"]}
          component={CrearEmpleado}
        />
        <PrivateRouteAdmin
          exact
          path={["/admin/eliminar-empleado"]}
          component={EliminarEmpleado}
        />

        <PrivateRouteAdmin
          exact
          path={["/admin/editar-empleado"]}
          component={EditarEmpleado}
        />
        <PrivateRouteEmpleado
          exact
          path={["/empleados"]}
          component={Pendientes}
        />
        <PrivateRouteEmpleado
          exact
          path={["/pendientes"]}
          component={Pendientes}
        />
        <PrivateRouteEmpleado exact path={["/procceso"]} component={Procceso} />
        <PrivateRouteEmpleado
          exact
          path={["/realizados"]}
          component={Realizados}
        />

        <PublicRoute exact path={["/registro"]} component={Registro} />
        <PrivateRouteAdmin
          exact
          path={["/admin/clientes"]}
          component={Clientes}
        />
        <Route exact path={["/clientes-inicio"]} component={InicioClientes} />
        <Route exact path={["/clientes-index"]} component={IndexClientes} />
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
