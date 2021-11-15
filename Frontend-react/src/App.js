
import './App.css';
import { Container } from 'react-bootstrap';
import Navegacion from './components/navegacion/Navegacion';
import Header from './components/header/header';
import HistorialCliente from './components/cliente/historial/HistorialCliente';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
     <Container>
     <Header/>
        <Navegacion/>

        <HistorialCliente />
     </Container>
    </div>
  );
}

export default App;
