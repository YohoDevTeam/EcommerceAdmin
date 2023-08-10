import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from "react-bootstrap/Button";
import color from "../../constants/theme";
import Table from "react-bootstrap/Table";
import { LuFileSpreadsheet } from "react-icons/lu";
import Pagination from "react-bootstrap/Pagination";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import invoiceList from "../../constants/invoiceList";
const Invoices = () => {

  const [modalShow, setModalShow] = React.useState(false);
  console.log(modalShow)

  function MyVerticallyCenteredModal(props) {

    return (
         
          <Modal className="px-5"  
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          New Import
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=" Name"
            defaultValue="Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Ref</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=" Name"
            defaultValue="Ref"
          />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>To</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue="To"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
        </Row>

               <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    
                        
                    </div>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                   <Form.Label>Due</Form.Label>
                    <Form.Control
                     required
                     type="Number"
                     placeholder=""
                      defaultValue="Amount"
                     />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                   </Form.Group>
                    

                   <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Status</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue="Status"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
                </div>
            </div> <br/>

         <div>
          <h5>Click here to upload the file</h5>
         <input type='file'/>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    


    //   <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       Using Grid in Modal
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body className="grid-example">
    //     <Container>
    //       <Row>
    //         <Col xs={6} md={6}>
    //           .col-xs-12 .col-md-8
    //         </Col>
    //         <Col xs={6} md={6}>
    //           .col-xs-6 .col-md-4
    //         </Col>
    //       </Row>
          
    //       <Row>
    //         <Col xs={6} md={6}>
    //           .col-xs-12 .col-md-8
    //         </Col>
    //         <Col xs={6} md={6}>
    //           .col-xs-6 .col-md-4
    //         </Col>
    //       </Row>
          
    //       <Row>
    //         <Col xs={6} md={6}>
    //           .col-xs-12 .col-md-8
    //         </Col>
    //         <Col xs={6} md={6}>
    //           .col-xs-6 .col-md-4
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col xs={6} md={6}>
    //           .col-xs-6 .col-md-4
    //         </Col>
    //         <Col xs={6} md={6}>
    //           .col-xs-6 .col-md-4
    //         </Col>
           
    //       </Row>
    //     </Container>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button onClick={props.onHide}>Submit</Button>
    //   </Modal.Footer>
    // </Modal>
    );
  }

const handleClick =() =>{
  console.log("clicked")
  setModalShow(true)
}

 return (
    <>
      <NavBar />
      <Box height={90} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
       
          <div
            className="p-4"
            style={{ backgroundColor: color.COLORS.darkFive }}
          >
             <MyVerticallyCenteredModal
              show={modalShow}
               onHide={() => setModalShow(false)}
              />
         

            <Row
              lg={2}
              md={1}
              xs={1}
              className="d-flex justify-content-between align-items-center"
            >
              <Col>
              
                  <h1> Invoices </h1>
              
              </Col>

              <Col className="text-lg-end d-none d-lg-block ">
              
             
                  <Dropdown className="d-inline mx-2  ">
                    <Dropdown.Toggle
                      id="dropdown-autoclose-true"
                      variant="white"
                      className="border border-secondary "
                    >
                      All
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                 

                 
                  <Button href="mailto:arunbalajiyoho@gmail.com?subject='statement'" className="mx-2" variant="outline-primary">
                    Send Statements
                  </Button>{" "}
                 

                 
                  <Button className="mx-2" variant="outline-primary">
                    Export
                  </Button>{" "}
                

                 
                 
                 

                 
                  <Button
                    className="mx-2" onClick={handleClick}
                    style={{ backgroundColor: color.COLORS.primary }}
                  >
                    New Import
                  </Button>{" "}
                 
                
              </Col>


              <Col className="text-lg-end d-lg-none d-block ">
              
             
              <Dropdown className="d-inline mx-2  " style={{width:"100%"}}>
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  variant="white"
                  className="border border-secondary "
                >
                  All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
             

             
              <Button className="mx-2 w-100" variant="outline-primary">
                Send Statements
              </Button>{" "}
             

             
              <Button className="mx-2 w-100" variant="outline-primary">
                Export
              </Button>{" "}
            

             
             
             

             
              <button
                className="mx-2 w-100"  onClick={handleClick}
                style={{ backgroundColor: color.COLORS.primary }}
              >
                New Import
              </button>{" "}

             
            
          </Col>
            </Row>





            <section>
              <div
                className="px-3 rounded d-none d-lg-block "
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <Table
                  className="my-5"
                  striped
                  bordered
                  hover
                  variant="#F5F5F5"
                >
                  <thead>
                    <tr style={{ border: 0 }}>
                      <th style={{ border: 0 }}>Number</th>
                      <th style={{ border: 0 }}>Ref</th>
                      <th style={{ border: 0 }}>To</th>
                      <th style={{ border: 0 }}>Date</th>
                      <th style={{ border: 0 }}>Due Date</th>
                      <th style={{ border: 0 }}>Paid</th>
                      <th style={{ border: 0 }}>Due</th>
                      <th style={{ border: 0 }}>Status</th>
                    </tr>
                  </thead>

                  <tbody>

               { 
                invoiceList.invoice.map((item,index) => (
                  <tr style={{ height: 55 }}>
                  <td>
                    <h6 className="text-semibold"> {item.Number} </h6>
                  </td>
                  <td>
                    {" "}
                    <h6> {item.Ref} </h6>{" "}
                  </td>
                  <td>
                    {" "}
                    <h6>
                      {" "}
                      <LuFileSpreadsheet /> { item.TO}{" "}
                    </h6>{" "}
                  </td>
                  <td>
                    {" "}
                    <h6>{item.Date}</h6>
                  </td>
                  <td>
                    <h6> {item.DueDate}</h6>
                  </td>
                  <td>
                    <h6>{item.Paid}</h6>
                  </td>
                  <td>
                    <h6>{item.Due}</h6>
                  </td>
                  <td>
                    <h6>{item.Status}</h6>{" "}
                  </td>
                </tr>
                ))
               }
                   


                    {/* <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td> P/O 9711</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> My way University{" "}
                        </h6>
                      </td>
                      <td>
                        <h6> 16 Mar 2021</h6>
                      </td>
                      <td>
                        <h6>23 Sep 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        <h6>234.00</h6>
                      </td>
                      <td>
                        <h6>Draft</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td> P/O 9711</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> My way University{" "}
                        </h6>
                      </td>
                      <td>
                        {" "}
                        <h6>04 Aug 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 06 Jul 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        <h6>234.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>Awaiting Payment</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td>Book</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> Marin bike club{" "}
                        </h6>
                      </td>
                      <td>
                        {" "}
                        <h6>07 May 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 17 Jul 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>234.00</h6>
                      </td>
                      <td>
                        <h6>Awaiting Payment</h6>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td> P/O 9711</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> My way University{" "}
                        </h6>
                      </td>
                      <td>
                        {" "}
                        <h6>11 Sep 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>24 Oct 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>234.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>Awaiting Payment</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td> P/O 9711</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> My way University{" "}
                        </h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 13 Mar 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 26 Jun 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        <h6>234.00</h6>
                      </td>
                      <td>
                        <h6>Paid</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td></td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> Rex Orange{" "}
                        </h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 17 Sep 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 18 Apr 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>234.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>Paid</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td>Training</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> New Era of Design{" "}
                        </h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 09 Jul 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 27 Aug 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>234.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>Awaiting Payment</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td>Workshop</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> New Era of Design{" "}
                        </h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 16 May 2021</h6>
                      </td>
                      <td>
                        <h6> 10 Nov 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        <h6>234.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>Awaiting Payment</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td>Monthly support</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> Rex Orange{" "}
                        </h6>
                      </td>
                      <td>
                        <h6> 17 Jan 2021</h6>
                      </td>
                      <td>
                        <h6> 27 Aug 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        <h6>234.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>Awaiting Payment</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td>Ref MK815</td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> Tv Thunder{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>23 Oct 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>20 Jul 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        <h6>234.00</h6>
                      </td>
                      <td>
                        {" "}
                        <h6>Awaiting Payment</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p className="text-semibold"> INV-0012 </p>
                      </td>
                      <td></td>
                      <td>
                        <h6>
                          {" "}
                          <LuFileSpreadsheet /> Rex Orange{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>17 Sep 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 18 Apr 2021</h6>
                      </td>
                      <td>
                        {" "}
                        <h6> 0.00</h6>
                      </td>
                      <td>
                        <h6>234.00</h6>{" "}
                      </td>
                      <td>
                        {" "}
                        <h6>Paid</h6>
                      </td>
                    </tr> */}
                  </tbody>
                </Table>
              </div>
            </section>


            <section className="d-lg-none d-block" style={{msOverflowX:"hidden"}}>
               <div >
               <Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

                 <div className="d-flex py-1 ">
                   <h6 style={{width:100}}>Number</h6>
                    <h6 >P/O CRM08-12</h6>
                 </div>

                  <div className="d-flex py-1">
                   <h6 style={{width:100}}>Ref</h6>
                   <h6>P/0 CRM08-12</h6>
                 </div>
                  
                 <div className="d-flex py-1">
                   <h6 style={{width:100}}>To</h6>
                   <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
                 </div>

                 
                 <div className="d-flex py-1">
                   <h6 style={{width:100}}>Date</h6>
                   <h6>25 Oct 2021</h6>
                 </div>

                 
                 <div className="d-flex py-1">
                   <h6 style={{width:100}}>Due Date</h6>
                   <h6>03 Nov 2021</h6>
                 </div>

                 
                 <div className="d-flex py-1">
                   <h6 style={{width:100}}>Paid</h6>
                   <h6>0.00</h6>
                 </div>
          
                 <div className="d-flex py-1">
                   <h6 style={{width:100}}>Due</h6>
                   <h6>234.00</h6>
                 </div>

                 
                 <div className="d-flex py-1">
                   <h6 style={{width:100}}>Status</h6>
                   <h6>Awaiting Payment</h6>
                 </div>
             
                </Card>


                <Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

            </Card>

          <Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

        </Card>

        <Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

         </Card>

        <Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

       </Card>


       <Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

</Card>


<Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

</Card>


<Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

</Card>


<Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

</Card>


<Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

</Card>


            


<Card className="mt-3 p-3" style={{ width: '18rem' ,backgroundColor:"#DCDCDC" }}>

<div className="d-flex py-1 ">
  <h6 style={{width:100}}>Number</h6>
   <h6 >P/O CRM08-12</h6>
</div>

 <div className="d-flex py-1">
  <h6 style={{width:100}}>Ref</h6>
  <h6>P/0 CRM08-12</h6>
</div>
 
<div className="d-flex py-1">
  <h6 style={{width:100}}>To</h6>
  <h6>  <LuFileSpreadsheet /> Marin bike club </h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Date</h6>
  <h6>25 Oct 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Due Date</h6>
  <h6>03 Nov 2021</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Paid</h6>
  <h6>0.00</h6>
</div>

<div className="d-flex py-1">
  <h6 style={{width:100}}>Due</h6>
  <h6>234.00</h6>
</div>


<div className="d-flex py-1">
  <h6 style={{width:100}}>Status</h6>
  <h6>Awaiting Payment</h6>
</div>

</Card>

               </div>
            </section>
             
             <section>
              <div>
                  
           <Row className="pt-3">
              <Col style={{display:"flex"}}>
                <div style={{marginRight:8,color: "#818181"}}>
                  <p> Showing</p>
                </div>
                <div style={{marginRight:8}}> 
                  {" "}
                  <DropdownButton className="align-items-center" title="25" variant="white" style={{backgroundColor:"white",border:"1px solid grey",borderRadius:10}}>
                    <Dropdown.ItemText>1</Dropdown.ItemText>
                  </DropdownButton>
                </div>
                <div style={{color: "#818181"}}>
                  {" "}
                  <p>itemes per page</p>
                </div>
              </Col>

              <Col>
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <Pagination> 
                    <Pagination.Item  active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>next</Pagination.Item>
                    <Pagination.Item>end</Pagination.Item>
                  </Pagination>
                </div>
              </Col>
              </Row>
              </div>
             </section>
  
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Invoices;
