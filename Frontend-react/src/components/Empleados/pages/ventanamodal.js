import {React,useState,setState} from 'react';
import {Modal,Button} from 'react-bootstrap';






function  Ventanamodal({children, estadoModal1, title})  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <>
       
        
        <Modal

          show={estadoModal1}
          backdrop="static"
          keyboard={false}
          onHide={handleClose}
          centered
         
        >
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          {children}
          
        </Modal>
        
      </>

    );
  }
  
  export default Ventanamodal