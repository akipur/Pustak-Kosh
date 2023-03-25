import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function AddNewModal(props) {
  return (
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Donor Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" placeholder="Book Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author Name</Form.Label>
        <Form.Control type="text" placeholder="Author Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Genre</Form.Label>
        <Form.Control type="text" placeholder="Genre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <textarea name="" id="" cols="10" rows="3" className='form-control'></textarea>
      </Form.Group> 
      <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick = {(formData) => props.handleSubmit(formData)} >Add Book</Button>
    </Form>
    </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
  );
}