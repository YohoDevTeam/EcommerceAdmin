import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CompanyForm = () => {
  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Company name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Location</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Location"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Employees</Form.Label>
          <Form.Control
            required
            type="Number"
            placeholder="No.of Employees"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        
      </Row>
      <div>
        <div className="row">
          <div className="col-md-8">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Revenue</Form.Label>
          <Form.Control
            required
            type="Number"
            placeholder="Revenue"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
          </div>
        </div>
      </div>{" "}
      <br />
      <div>
        <h5>Click here to upload the company file</h5>
        <input type="file" />
      </div>
    </div>
  );
};

export default CompanyForm;
