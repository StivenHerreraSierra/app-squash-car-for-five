
import './App.css';
import { Container } from 'react-bootstrap';
/*import Navegacion from './components/navegacion/Navegacion';
import Header from './components/header/header';
import HistorialCliente from './components/cliente/historial/HistorialCliente';*/
import AppRouter from './components/router/router';
import "bootstrap/dist/css/bootstrap.min.css";


/*
<Header/>
        <Navegacion/>

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
