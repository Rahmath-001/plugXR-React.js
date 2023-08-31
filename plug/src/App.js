// App.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Draggable from 'react-draggable';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveButtonClick = () => {
    setShowModal(true);
  };

  return (
    <>
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={4} className="resizable-col">
            {/* Resizable Section 1 */}
          </Col>
          <Col md={4} className="resizable-col">
            {/* Resizable Section 2 */}
          </Col>
          <Col md={4} className="resizable-col">
            {/* Resizable Section 3 */}
          </Col>
        </Row>
      </Container>
      <Button variant="primary" onClick={handleSaveButtonClick}>
        Save
      </Button>

      {/* Draggable Popup */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton={false} >
          {/* <Modal.Title>Popup</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Draggable>
            <div className="popup-container">
              <div className="popup-square">
                Drag me around
                <Button variant="danger" className="close-button" onClick={handleModalClose}>
                  Close
                </Button>
              </div>
            </div>
          </Draggable>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}

export default App;
