
import './App.css';
import { Container } from 'react-bootstrap';
import Navegacion from './components/navegacion/Navegacion';
import Header from './components/header/header';
import ReservasCliente from './components/cliente/reservas/ReservasCliente';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
     <Container>
     <Header/>
        <Navegacion/>

        <ReservasCliente />
     </Container>
    </div>
  );
}

export default App;
