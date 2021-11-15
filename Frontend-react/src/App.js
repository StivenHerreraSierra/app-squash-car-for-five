
import './App.css';
import { Container } from 'react-bootstrap';
import Navegacion from './components/navegacion/Navegacion';
import Header from './components/header/header';
import InicioCliente from './components/cliente/inicio/InicioCliente';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
     <Container>
     <Header/>
        <Navegacion/>

        <InicioCliente />
     </Container>
    </div>
  );
}

export default App;
