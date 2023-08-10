import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import Color from "../../constants/theme";
import AddIcon from "@mui/icons-material/Add";
import { FiMoreHorizontal } from "react-icons/fi";
import Pagination from "react-bootstrap/Pagination";
import { IoMdArrowDropdown } from "react-icons/io";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { Box } from "@mui/material";
import Card from "react-bootstrap/Card";
import { LuFileSpreadsheet } from "react-icons/lu";
import dummy from "../../constants/DataContacts"
import Modal from 'react-bootstrap/Modal';
import ContactsForm from "../../components/ContactsForm";


const Contacts = () => {
 const [modalShow,setModalShow] =React.useState (false)
 function MyVerticallyCenteredModal(props){
    return (
      
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="py-5 px-5 justify-content-center">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contacts
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <>
           <ContactsForm/>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      
    );
  }
  const handleClick=()=>{
    setModalShow(true)
  }
  return (

    <div style={{ overflowX: "hidden" }}>
      <NavBar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <section>
           <MyVerticallyCenteredModal show={modalShow} onHide={()=> setModalShow (false)} />
            <Row
              lg={2}
              md={1}
              xs={1}
              className="d-flex justify-content-between align-items-center "
            >
              <Col>
                <h1>Contacts</h1>
              </Col>

              <Col className="text-lg-end pe-5">
                <Row lg={3} md={1} xm={1}>
                <Col lg={4} className="cup py-2"  style={{ display: "flex" }}>
                    <div className="py-2">
                      <BiSearch />
                    </div>

                    <div>
                      <Form>
                        <Form.Group>
                          <Col sm="10">
                            <Form.Control
                              placeholder="Search"
                              style={{ border: "none" }}
                            />
                          </Col>
                        </Form.Group>
                      </Form>
                    </div>
                  </Col>
                  <Col lg={4} className="py-2">
                    <Button className="cup" variant="light" style={{ marginRight: 10 }} onClick= {handleClick} >
                      <BsFilter style={{ color: "grey", marginRight: 5 }} />
                      Filter
                    </Button>{" "}
                  </Col>
                  <Col lg={4}>
                    <Button className="cup" onClick= {handleClick}
                      variant="secondary"
                      style={{ backgroundColor: Color.COLORS.primary }}
                    >
                      
                     + Add Contacts
                    </Button>{" "}
                  </Col>
                </Row>
              </Col>
            </Row>

            <div className=" d-none d-lg-block py-3">
              <Table striped="columns" >
                <thead>
                  <tr>
                    <th className="ps-5"> Name</th>
                    <th> Phone</th>
                    <th> Email</th>
                    <th> Company</th>
                    <th> Created Date</th>
                    <th> More</th>
                  </tr>
                </thead>
                {dummy.DataContacts.map((value)=>(
                <tbody>
                  <tr>
                    <td className="ps-5">
                      {" "}
                      <img
                        src={value.imageuri}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                      />{" "}
                     {value.firstname}
                    </td>
                    <td> {value.Number} </td>
                    <td> {value.email} </td>
                    <td>{value.company} </td>
                    <td> {value.date} </td>
                    <td>
                      {" "}
                      <FiMoreHorizontal />
                    </td>
                  </tr>

                 
                </tbody>
                ))}
              </Table>
            </div>

            <div className="d-lg-none ">
            {dummy.DataContacts.map((value)=>(
              <Card
                className="mt-3 ps-3 "
                style={{ width: "18rem", backgroundColor: "#DCDCDC" }}
              >
                <div className="d-flex py-1 ">
                  <h6 style={{ width: 100 }}> Name </h6>
                  <h6>
                    :{" "}
                    <img
                      src={value.imageuri}
                      style={{ width: 40, height: 40, borderRadius: 50 }}
                    />{" "}
                    {value.firstname}
                  </h6>
                </div>

                <div className="d-flex py-1">
                  <h6 style={{ width: 100 }}> Phone</h6>
                  <h6>; {value.Number}</h6>
                </div>

                <div className="d-flex py-1">
                  <h6 style={{ width: 100 }}> Email</h6>
                  <h6> : {value.email} </h6>
                </div>

                <div className="d-flex py-1">
                  <h6 style={{ width: 100 }}> Company</h6>
                  <h6>: {value.company} </h6>
                </div>

                <div className="d-flex py-1">
                  <h6 style={{ width: 100 }}>Created Date</h6>
                  <h6>: {value.date} </h6>
                </div>

                <div className="d-flex py-1">
                  <h6 style={{ width: 100 }}>More</h6>
                  <h6>
                    : <FiMoreHorizontal />
                  </h6>
                </div>
              </Card>
              ))}
            </div>

         

            <div>
              <Row lg={2} className="py-2">
                <Col md={1}>
                  <p>
                    Showing{" "}
                    <Button type="button" className="bg-secondary">
                      {" "}
                      10 <IoMdArrowDropdown />
                    </Button>{" "}
                    items per page
                  </p>
                </Col>
                <Col md={1}>
                
                  <Pagination
                    style={{ justifyContent: "end"}}>
                  
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>Next</Pagination.Item>
                    <Pagination.Item>End</Pagination.Item>
                  </Pagination>
                </Col>
              </Row>
            </div>

          </section>
        </Box>
      </Box>
    </div>
  );
};

export default Contacts;
