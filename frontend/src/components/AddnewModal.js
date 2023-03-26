import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function AddNewModal(props) {

  const [formData, setFormData] = useState({
    user_id: 2,
    book_name: 'test book ' + Date.now(),
    author: 'parul #' + Date.now(),
    genre: 'novel',
    description: 'description',
    donation_status: "PENDING"
  });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const jsonData = JSON.stringify(formData);
  //   console.log(jsonData);
  // };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" value={formData.book_name} name="book_name" onChange={handleChange} placeholder="Book Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" value={formData.author} name="author" onChange={handleChange} placeholder="Author Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Genre</Form.Label>
            <Form.Control type="text" value={formData.genre} name="genre" onChange={handleChange} placeholder="Genre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <textarea name="description" value={formData.description} onChange={handleChange} className='form-control'></textarea>
          </Form.Group>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={(e) => props.handleSubmit(e,formData)}> + Add Book</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
}