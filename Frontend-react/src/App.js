import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "./components/router/router";

/*
import Header from './components/header/header';
import ReservasCliente from './components/cliente/reservas/ReservasCliente';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/navegacion/Navegacion';
import HistorialCliente from './components/cliente/historial/HistorialCliente';

<Header/>
        <Navegacion/>

        <ReservasCliente />
     </Container>
        <HistorialCliente />
*/

function App() {
  return (
    <div className="App">
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
