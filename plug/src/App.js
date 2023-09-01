import React, { useState } from 'react';
import {Button, Modal } from 'react-bootstrap';
import Draggable from 'react-draggable';
import './App.css'
import './ResizableSections.css'; // Import your CSS file

const ResizableSections = () => {
  const [sectionWidths, setSectionWidths] = useState([33.33, 33.33, 33.33]);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveButtonClick = () => {
    setShowModal(true);
  };



  const handleResize = (index, deltaX) => {
    const newWidths = [...sectionWidths];
    newWidths[index] += deltaX;
    newWidths[index + 1] -= deltaX;
    setSectionWidths(newWidths);
  };

  

  return (
    <>
  

      <div className='navbar'>
        <div className='save-btn'>
      <Button variant="primary" onClick={handleSaveButtonClick}>
        Save
      </Button>
      </div>
      </div>

      {/* Draggable Popup */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Body closeButton={false}>
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

<div className="container conatiner-1">
      <div className="section section-1" style={{ flex: sectionWidths[0] }}>
        <div className="small-cards">
      {/* Add 5 small cards here */}
      <div className="small-card">Card 1</div>
      <div className="small-card">Card 2</div>
      <div className="small-card">Card 3</div>
      <div className="small-card">Card 4</div>
      <div className="small-card">Card 5</div>
      <div className="small-card">Card 6</div>
      <div className="small-card">Card 7</div>
      <div className="small-card">Card 8</div>
      <div className="small-card">Card 9</div>
      <div className="small-card">Card 10</div>
    </div>
      </div>
      <div
        className="resizer resizer-right"
        onMouseDown={e => {
          const startX = e.clientX;
          const initialWidth = sectionWidths[0];
          const index = 0;

          const handleMouseMove = moveEvent => {
            const deltaX = moveEvent.clientX - startX;
            const newWidth = initialWidth + (deltaX / document.body.clientWidth) * 100;
            if (newWidth >= 10 && newWidth <= 90) {
              handleResize(index, newWidth - sectionWidths[index]);
            }
          };

          const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
          };

          window.addEventListener('mousemove', handleMouseMove);
          window.addEventListener('mouseup', handleMouseUp);
        }}
      ></div>
      <div className="section" style={{ flex: sectionWidths[1] }}>
        Section 2
      </div>
      <div
        className="resizer resizer-left"
        onMouseDown={e => {
          const startX = e.clientX;
          const initialWidth = sectionWidths[1];
          const index = 1;

          const handleMouseMove = moveEvent => {
            const deltaX = moveEvent.clientX - startX ;
            const newWidth = initialWidth + (deltaX / document.body.clientWidth) * 100;
            if (newWidth >= 10 && newWidth <= 90) {
              handleResize(index, newWidth - sectionWidths[index]);
            }
          };

          const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
          };

          window.addEventListener('mousemove', handleMouseMove);
          window.addEventListener('mouseup', handleMouseUp);
        }}
      ></div>
      <div className="section section-3" style={{ flex: sectionWidths[2] }}>
        Section 3
      </div>
    </div>
    </>
  );
};

export default ResizableSections;
