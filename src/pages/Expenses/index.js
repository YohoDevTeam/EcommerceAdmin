import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import { BsFilter } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { FaDollarSign } from "react-icons/fa";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { AiFillCar, AiFillCreditCard } from "react-icons/ai";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";






const Expenses = () => {

  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props){
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Expenses
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Expenses</h4>
        <p>
        the cost incurred in or required for something.
"conference rooms were equipped at great expense"
        </p>
      </Modal.Body>
      
    </Modal>
  );
}

const handleClick=()=>{
  setModalShow(true)
}
  
  return (
    <>
      <NavBar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            <div>
              <Container >
               <Row className="d-flex justify-content-between">
                <Col>
                <h2 style={{ marginTop:"10px" }}>Expenses</h2>
                </Col>

                <Col>
                <div className="d-flex" style={{ marginTop: "10px" }}>
                  <div
                    className="d-flex"
                    
                  >

                       <Dropdown >
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      <BsFilter
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "5px",
                      
                      }}
                    />Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><AiFillCar/> Car</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><FaDollarSign /> Dollar</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><AiFillCreditCard/> Card</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                   
                  </div>

                  <div style={{ marginLeft: "20PX" }}>
                    <Button onClick={handleClick} style={{backgroundColor:"#775DA6"}}>New Expenses</Button>
                  </div>
                </div>
                </Col>
               </Row>
              </Container>
            </div>

            <div style={{ marginTop: "30px" }}>
              <Container>
                <Row>
                <Col>
                <Nav variant="underline" defaultActiveKey="">
                  
                  <Nav.Item>
                    <Nav.Link className="text-dark">Your Own</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="link-1">To Review (2)</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="link-1">To Pay</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="link-1">All</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Explorer</Nav.Link>
                  </Nav.Item>
                  
                </Nav>
                </Col>
                </Row>
              </Container>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Container>
                <Row className="d-flex">
                <Col >
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title>Submitted</Card.Title>
                    <Card.Text style={{ fontSize: "30px", fontWeight: 700 }}>
                      910.00
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                
              <Col>
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title>To be Paid</Card.Title>
                    <Card.Text style={{ fontSize: "30px", fontWeight: 700 }}>
                      566.90
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                </Row>
              </Container>
            </div>

            <div style={{ marginTop: "30px" }}>
              <Container>
                <Card
                  className="border border-top rounded-top"
                  style={{ width: "100%" }}
                >
                  <Card.Body>
                    <Card.Text style={{ fontSize: "20px", fontWeight: 600 }}>
                      Draft (1)
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Container>

              <div style={{ marginTop: "2px" }}>
                <Container>
                  <Card
                    className="rounded-top"
                    style={{ width: "100%", height: "150px" }}
                  >
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-between">
                        <div className="d-flex">
                          <FaDollarSign
                            style={{
                              width: "25px",
                              height: "25px",
                              marginTop: "20px",
                              color: "#775DA6",
                            }}
                          />
                          <div>
                            <p
                              style={{
                                marginLeft: "20px",
                                marginTop: "10px",
                                fontSize: "18px",
                                fontWeight: 600,
                              }}
                            >
                              New Draft
                            </p>
                            <p
                              style={{
                                marginLeft: "20px",
                                color: "grey",
                                marginTop: "-20px",
                                fontSize: "14px"
                              }}
                            >
                              Spent Aug 22,2020 <BsDot />
                              Reimbursable{" "}
                            </p>
                          </div>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <h4>
                            1,602.00 &nbsp; &nbsp; &nbsp; <BsThreeDots />{" "}
                          </h4>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </div>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Container>
                <Card
                  className="border border-top rounded-top"
                  style={{ width: "100%" }}
                >
                  <Card.Body>
                    <Card.Text style={{ fontSize: "20px", fontWeight: 600 }}>
                      Submitted (4)
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Container>

              <div style={{ marginTop: "2px" }}>
                <Container>
                  <Card
                    className="rounded-top"
                    style={{ width: "100%", height: "150px" }}
                  >
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-between">
                        <div className="d-flex">
                          <AiFillCar
                            style={{
                              width: "25px",
                              height: "25px",
                              marginTop: "20px",
                              color: "#775DA6",
                            }}
                          />
                          <div>
                            <p
                              style={{
                                marginLeft: "20px",
                                marginTop: "5px",
                                fontSize: "18px",
                                fontWeight: 600,
                              }}
                            >
                              24 km "Travel to Idealist Design Studio"
                            </p>
                            <p
                              style={{
                                marginLeft: "20px",
                                color: "grey",
                                marginTop: "-10px",
                                fontSize: "14px"
                              }}
                            >
                              Travelled Jul 3,2020 - 300 -Advertling <BsDot />
                              Reimbursable{" "}
                            </p>
                          </div>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <h4>
                            12.90 &nbsp; &nbsp; &nbsp; <BsThreeDots />{" "}
                          </h4>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </div>

              <div style={{ marginTop: "2px" }}>
                <Container>
                  <Card
                    className="rounded-top"
                    style={{ width: "100%", height: "150px" }}
                  >
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-between">
                        <div className="d-flex">
                          <FaDollarSign
                            style={{
                              width: "25px",
                              height: "25px",
                              marginTop: "20px",
                              color: "#775DA6",
                            }}
                          />
                          <div>
                            <p
                              style={{
                                marginLeft: "20px",
                                marginTop: "5px",
                                fontSize: "18px",
                                fontWeight: 600,
                              }}
                            >
                              Lajou Cafe and Restro "Dinner with Client"
                            </p>
                            <p
                              style={{
                                marginLeft: "20px",
                                color: "grey",
                                marginTop: "-10px",
                                fontSize: "14px"
                              }}
                            >
                              Travelled Jul 3,2020 - 300 -Advertling <BsDot />
                              Reimbursable{" "}
                            </p>
                          </div>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <h4>
                            230.00 &nbsp; &nbsp; &nbsp; <BsThreeDots />{" "}
                          </h4>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </div>

              <div style={{ marginTop: "2px" }}>
                <Container>
                  <Card
                    className="rounded-top"
                    style={{ width: "100%", height: "150px" }}
                  >
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-between">
                        <div className="d-flex">
                          <AiFillCreditCard
                            style={{
                              width: "25px",
                              height: "25px",
                              marginTop: "20px",
                              color: "#775DA6",
                            }}
                          />
                          <div>
                            <p
                              style={{
                                marginLeft: "20px",
                                marginTop:"5px",
                                fontSize: "18px",
                                fontWeight: 600,
                              }}
                            >
                              Macbook 2021 "New device"
                            </p>
                            <p
                              style={{
                                marginLeft: "20px",
                                color: "grey",
                                marginTop: "-10px",
                                fontSize: "14px"
                              }}
                            >
                              Spent Dec 29,2020 - 400 -Advertling <BsDot />
                              Non-Reimbursable{" "}
                            </p>
                          </div>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <h4>
                            989.00 &nbsp; &nbsp; &nbsp; <BsThreeDots />{" "}
                          </h4>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </div>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Container>
                <Card
                  className="border border-top rounded-top"
                  style={{ width: "100%" }}
                >
                  <Card.Body>
                    <Card.Text style={{ fontSize: "20px", fontWeight: 600 }}>
                      To be Paid (2)
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Container>

              <div style={{ marginTop: "2px" }}>
                <Container>
                  <Card
                    className="rounded-top"
                    style={{ width: "100%", height: "150px" }}
                  >
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-between">
                        <div className="d-flex">
                          <FaDollarSign
                            style={{
                              width: "25px",
                              height: "25px",
                              marginTop: "20px",
                              color: "#775DA6",
                            }}
                          />
                          <div>
                            <p
                              style={{
                                marginLeft: "20px",
                                marginTop: "5px",
                                fontSize: "18px",
                                fontWeight: 600,
                              }}
                            >
                              Monde's Bakery
                            </p>
                            <p
                              style={{
                                marginLeft: "20px",
                                color: "grey",
                                marginTop: "-20px",
                                fontSize: "14px"
                              }}
                            >
                              Travelled Jul 3,2020 - 300 -Advertling <BsDot />
                              Reimbursable{" "}
                            </p>
                          </div>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <h4>
                            230.00 &nbsp; &nbsp; &nbsp; <BsThreeDots />{" "}
                          </h4>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </div>

              <div style={{ marginTop: "2px" }}>
                <Container>
                  <Card className="rounded-top" style={{ width: "100%",height:'150px' }}>
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-between">
                        <div className="d-flex">
                          <AiFillCar
                            style={{
                              width: "25px",
                              height: "25px",
                              marginTop: "20px",
                              color: "#775DA6",
                            }}
                          />

                          <div>
                            <p
                              style={{
                                marginLeft: "20px",
                                marginTop: "5px",
                                fontSize: "18px",
                                fontWeight: 600,
                              }}
                            >
                              24 km "Travel to Design Studio"
                            </p>
                            <p
                              style={{
                                marginLeft: "20px",
                                color: "grey",
                                marginTop: "-10px",
                                fontSize: "14px"
                              }}
                            >
                              Travelled Jul 3,2020 - 300 -Advertling <BsDot />
                              Reimbursable{" "}
                            </p>
                          </div>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <h4>
                            12.90 &nbsp; &nbsp; &nbsp; <BsThreeDots />{" "}
                          </h4>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </div>

              <div style={{ marginTop: "2px" }}>
                <Container>
                  <Card
                    className="rounded-top"
                    style={{ width: "100%", height: "150px" }}
                  >
                    <Card.Body>
                      <Card.Text className="d-flex justify-content-between">
                        <div className="d-flex">
                          <AiFillCreditCard
                            style={{
                              width: "25px",
                              height: "25px",
                              marginTop: "20px",
                              color: "#775DA6",
                            }}
                          />
                          <div>
                            <p
                              style={{
                                marginLeft: "20px",
                                marginTop: "10px",
                                fontSize: "18px",
                                fontWeight: 600,
                              }}
                            >
                              Macbook 2021 "New device"
                            </p>
                            <p
                              style={{
                                marginLeft: "20px",
                                color: "grey",
                                marginTop: "-10px",
                                fontSize: "14px"
                              }}
                            >
                              Spent Dec 29,2020 - 400 -Advertling <BsDot />
                              Non-Reimbursable{" "}
                            </p>
                          </div>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <h4>
                            989.00 &nbsp; &nbsp; &nbsp; <BsThreeDots />{" "}
                          </h4>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Expenses;
