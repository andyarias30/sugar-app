import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';




function AddSugarModal({ show, handleClose }) {

  // Save the new sugar level here

  const [sugarLevels, setSugarLervels] = useState([])

  const handleForSubmit = (evt) => {
    evt.preventDefault()
    console.log("handleForSubmit")
    const formData = {}
    formData.userName = evt.target.userName.value
    formData.beforeBreakfast = evt.target.beforeBreakfast.value
    formData.beforeLunch = evt.target.beforeLunch.value
    formData.beforeDinner = evt.target.beforeDinner.value
    formData.other = evt.target.other.value
    console.log(formData)


    // evt.target.userName = ''
    // evt.target.beforeBreakfast = ''
    // evt.target.beforeLunch = ''
    // evt.target.beforeDinner = ''
    // evt.target.other = ''

    fetch('http://localhost:3005/mysugarLevels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(cleanData => setSugarLervels(cleanData))
      .catch(err => console.error(err))

    // handleClose()
  }

  return (

    <Modal show={show}>
      <Modal.Header >
        <Modal.Title>🩸❤️New Sugar Level❤️🩸</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleForSubmit}>
          <p>🩸Blood Sugar Info🩸</p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Name:</Form.Label>
            <Form.Control id="userName" name="userName" type="Text" placeholder="Susana Avila" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Before Breakfast:</Form.Label>
            <Form.Control id="beforeBreakfast" type="number" placeholder="Sugar Level" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Before Lunch:</Form.Label>
            <Form.Control id="beforeLunch" type="number" placeholder="Sugar Level" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Before Dinner</Form.Label>
            <Form.Control id="beforeDinner" type="number" placeholder="Sugar Level" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Others:</Form.Label>
            <Form.Control id="other" type="number" placeholder="Sugar Level" />
          </Form.Group>
          <Button variant="primary" type='submit' onClick={handleClose} >Save changes</Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal >

  );
}

export default AddSugarModal