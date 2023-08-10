import React from 'react'
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";

const ContactsForm = () => {
  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label> Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=" Name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            required
            type="type"
            placeholder="+91"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            required
            type="type"
            placeholder="Company"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      
         

      </Row>

      <div>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Group controlId="dob">
                            <Form.Label>Created Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group controlId="dob">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="type" name="dob" placeholder="@gmail.com" />
                        </Form.Group>
                    </div>
                </div>
            </div> <br/>

<div>
  <h5>Click here to upload your profile</h5>
        <input type='file'/>
        </div>
    </div>
  )
}

export default ContactsForm
