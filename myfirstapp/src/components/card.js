import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function CardComp(props) {
  // let [counter, setCounter] =useState(0)

  // function addToFavorites(){
  // setCounter(counter+1)
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Body>{props.category}</Card.Body>
          {/* <Card.Text>{props.description}</Card.Text>
          <Card.Text>★ {counter}</Card.Text>
          <Button variant="primary" onClick={addToFavorites}>Add to favorites</Button> */}

          <Button variant="primary" onClick={handleShow}>Show details</Button>

        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CardComp;