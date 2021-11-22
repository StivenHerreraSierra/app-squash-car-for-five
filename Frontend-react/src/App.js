import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "./components/router/router";

/*
import Header from './components/header/header';
<<<<<<< HEAD
import ReservasCliente from './components/cliente/reservas/ReservasCliente';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import Navegacion from './components/navegacion/Navegacion';
import HistorialCliente from './components/cliente/historial/HistorialCliente';
>>>>>>> 383d86766710b0ef0043ff580d647396411a19d5

<Header/>
        <Navegacion/>

<<<<<<< HEAD
        <ReservasCliente />
     </Container>
=======
        <HistorialCliente />
*/

function App() {
  return (
    <div className="App">
      <Container>
        <AppRouter />
      </Container>
>>>>>>> 383d86766710b0ef0043ff580d647396411a19d5
    </div>
  );
}

export default App;
