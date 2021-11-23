import React from 'react';

import { Container, Nav } from "react-bootstrap";




class navegacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   
        <Container id="container-navegacion">
       
      
          <Nav justify variant="tabs" >
            <Nav.Item>
             <Nav.Link href = "/pendientes">Pendientes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
             <Nav.Link href = "/procceso" eventKey="/procceso" >Procceso</Nav.Link>
            </Nav.Item>
            <Nav.Item>
           <Nav.Link href="/realizados" eventKey="/realizados">Realizados</Nav.Link> 
            </Nav.Item>
          </Nav>
      
          
      </Container> );
    }
}
 
export default navegacion;