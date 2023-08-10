
import React from "react";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Colors from "../../constants/theme";
import { BsFilter } from "react-icons/bs";
import BusinessTable from "../../components/BusinessTable";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "react-bootstrap/Pagination";
import MobileCompanyList from "../../components/MobileCompanyList";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CompanyForm from "../../components/CompanyForm";
import DummyData from "../../constants/datacompanylist"
import { BiSearch } from "react-icons/bi"
import { Card } from "react-bootstrap";
import { RxDotFilled } from "react-icons/rx"
import { AiFillStar } from "react-icons/ai"
import { PiPencilSimpleLineBold } from "react-icons/pi"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Table from "react-bootstrap/Table";
import Typography from "@mui/material/Typography";
import { FormControl } from "react-bootstrap";



const Orders = () => {
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
   

  const [openModel, setOpenModel] = React.useState(false);
  const handleOpenModel = () => {
    setOpenModel(true);
    handleClose();
  };
  const handleCloseModel = () => setOpenModel(false);

  const [CancelModel, setCancelModel] = React.useState(false);
  const handleCancelModel = () => {
    setCancelModel(true);
    handleClose();
  };
  const handleModel = () => setCancelModel(false);

  

  return (
    <>
      <NavBar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
        <Modal
              keepMounted
              open={openModel}
              onClose={handleCloseModel}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                >
             Edit Order Details
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              
                 
                
               
              
                    <Form.Label className="mt-2 fw-bold">Status</Form.Label>
                    <Form.Select className="fw-bold " >
                            <option>-----</option>
                             
                                   <option value="1">Cancelled</option>
                                   <option value="2">Shipped</option>
                                   <option value="3">Pending</option>
                                   <option value="4">Delivered</option>
                                          
                                       </Form.Select>
               
               
               
                <Row className="mt-3">

                  <Col>
                    <Button variant="secondary" onClick={handleCloseModel}>
                      Close
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={handleCloseModel}>
                      Save Changes
                    </Button>
                  </Col>
                </Row>
                </Typography>
              </Box>
            </Modal>

            <Modal
            keepMounted
            open={CancelModel}
            onClose={handleModel}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              >
                Remove
            
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              
             Are you sure you want to remove?  
               
               
                <Row className="mt-3">
                  <Col>
                    <Button variant="secondary" onClick={handleModel}>
                      Yes
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={handleModel}>
                      No
                    </Button>
                  </Col>
                </Row>
              </Typography>
            </Box>
          </Modal>

          <div style={{ backgroundColor: "#F5F5F5", overflowX: "hidden" }}>

       


            <div>
              <Form className="d-flex">
                    <Form.Control placeholder="Search Your Order here" className="w-25" />
                    <Button type="text" className="mx-2">
                      <BiSearch />
                      Search 
                    </Button>
              </Form>
            </div>



            <div>
              {/* <Row style={{ marginTop: 10 }}>
                <Col lg={2}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Filter</Accordion.Header>
                      <Accordion.Body>

                        <div>
                          <h6 style={{ fontWeight: "bold" }}>ORDER STATUS</h6>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p >On the way</p>
                        </div>


                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Delivered</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Cancelled</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Returned</p>
                        </div>

                        <div>
                          <h6 style={{ fontWeight: "bold" }}>ORDER TIME</h6>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Last 30 days</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>2022</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>2021</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>2020</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>2019</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Older</p>
                        </div>
                      
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>

                  <Col lg={10}>


                  <Card >

                    <Row className="align-items-center">
                      <Col >

                        <img src="https://freepngimg.com/thumb/categories/627.png" style={{ width: 100, height: 100 }} />

                      </Col>
                      <Col>
                        <h5>
                          Nike Shoes for men
                        </h5>
                      </Col>
                      <Col>
                        <h6>     &#8377; 5000</h6>
                      </Col>
                      <Col>
                        <RxDotFilled style={{ color: "green", fontSize: 30 }} /> <span style={{ fontWeight: "bold" }}>Delivered on Jul 13</span>
                        <h6 style={{ fontSize: 15 }}>Your item has been delivered</h6>
                        <a href="./" style={{ textDecoration: "none" }}>
                          <AiFillStar /> Rate & Review Product
                        </a>
                      </Col>

                      <Col>


                        <div>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick1}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                              },
                            }}
                          >
                            
                              <MenuItem key="Edit"  onClick={handleShow1}>
                                Edit
                              </MenuItem>

                              <MenuItem key="Remove"  onClick={handleShow2}>
                                Remove
                              </MenuItem>

                              
                              <MenuItem key="Cancel"  onClick={handleShow3}>
                               Cancel Order
                              </MenuItem>
          
                          </Menu>
                        </div>




                                                           

                    <Button variant="primary"  style={{ backgroundColor:"white", border: "none" }} onClick={handleShow}>
                    <PiPencilSimpleLineBold style={{color:"blue",fontSize:20}}/>
                    </Button>

                      </Col>
                    </Row>

                  </Card>



                                     
                     <Card className="mt-2">
                      
                  <Row className="align-items-center">     
                <Col>
                
                                   <img src="https://www.pngmart.com/files/22/Laptop-Bag-PNG-File.png" style={{width:100,height:90}}/>
              
                                   </Col> 
                                   <Col>
                                   <h5>
                                    Wildcraft Laptop Bags
                                     </h5>
                                   </Col>
                                   <Col>
                                     <p>     &#8377; 2000</p>
                                   </Col>
                                   <Col>
                                   <RxDotFilled style={{color:"green",fontSize:30}}/> <span style={{fontWeight:"bold"}}>Delivered on Aug 15</span>
                                   <h6 style={{fontSize:15}}>Your item has been delivered</h6>
                                     <a href="./" style={{textDecoration:"none"}}>
                                   <AiFillStar/> Rate & Review Product
                                   </a>
                                   </Col>

                                  
                                   <Col xs={1}> 
                                   
                               


                                   

                    <Button variant="primary"  style={{ backgroundColor:"white", border: "none" }} onClick={handleShow}>
                    <PiPencilSimpleLineBold style={{color:"blue",fontSize:20}}/>
                    </Button>

                    <Modal show={show} onHide={handleClose} animation={false} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>

                          <Dropdown>
                            <Dropdown.Toggle variant="Primary" id="dropdown-basic" style={{ backgroundColor: "#775DA6", color: "white" }}>
                              Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Lead Discovered</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Contact Initiated</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Meeting Arranged</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">offer Accepted</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>

                 



                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row className="mb-3">
                          <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder=" Name"

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                              required
                              type="Number"
                              placeholder=""
                              defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
        

                        </Row>

                        <div>
                          <div className="row">
                            <div className="col-md-4">
                              <Form.Group controlId="dob">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                              </Form.Group>
                            </div>
                          </div>
                        </div> <br />

                        <div>
                          <h5>Click here to upload the file</h5>
                          <input type='file' />
                        </div>




                      </Modal.Body>
                      <Modal.Footer>
                 
                        <Button variant="primary" onClick={handleClose}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                                   </Col>
                      </Row>

                     </Card>

                     <Card className="mt-2">
                      
                  <Row className="align-items-center">     
                <Col>
                
                                   <img src="https://www.pngmart.com/files/8/Dress-Shirt-PNG-Transparent-Images.png" style={{width:100,height:100}}/>
              
                                   </Col> 
                                   <Col>
                                     <h5>
                                      DNMX Denim Shirts
                                     </h5>
                                   </Col>
                                   <Col>
                                     <p>     &#8377; 1200</p>
                                   </Col>
                                   <Col>
                                   <RxDotFilled style={{color:"green",fontSize:30}}/> <span style={{fontWeight:"bold"}}>Delivered on Jan 13</span>
                                   <h6 style={{fontSize:15}}>Your item has been delivered</h6>
                                     <a href="./" style={{textDecoration:"none"}}>
                                   <AiFillStar/> Rate & Review Product
                                   </a>
                                   </Col>
                                  
                                   <Col xs={1}> 
                                   
                               


                                   

                    <Button variant="primary"  style={{ backgroundColor:"white", border: "none" }} onClick={handleShow}>
                    <PiPencilSimpleLineBold style={{color:"blue",fontSize:20}}/>
                    </Button>

                    <Modal show={show} onHide={handleClose} animation={false} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>

                          <Dropdown>
                            <Dropdown.Toggle variant="Primary" id="dropdown-basic" style={{ backgroundColor: "#775DA6", color: "white" }}>
                              Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Lead Discovered</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Contact Initiated</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Meeting Arranged</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">offer Accepted</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>

                 



                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row className="mb-3">
                          <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder=" Name"

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                              required
                              type="Number"
                              placeholder=""
                              defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
        

                        </Row>

                        <div>
                          <div className="row">
                            <div className="col-md-4">
                              <Form.Group controlId="dob">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                              </Form.Group>
                            </div>
                          </div>
                        </div> <br />

                        <div>
                          <h5>Click here to upload the file</h5>
                          <input type='file' />
                        </div>




                      </Modal.Body>
                      <Modal.Footer>
                 
                        <Button variant="primary" onClick={handleClose}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                     </Col>
                      </Row>

                     </Card>

                     <Card className="mt-2">  
                      
                  <Row className="align-items-center">     
                <Col>
                
                                   <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Photo.png" style={{width:100,height:100}}/>
              
                                   </Col> 
                                   <Col>
                                     <h5>
                                 Iphone 12pro Max 128gb
                                     </h5>
                                   </Col>
                                   <Col>
                                     <p>     &#8377; 102000</p>
                                   </Col>
                                   <Col>
                                   <RxDotFilled style={{color:"green",fontSize:30}}/> <span style={{fontWeight:"bold"}}>Delivered on Jul 13</span>
                                   <h6 style={{fontSize:15}}>Your item has been delivered</h6>
                                     <a href="./" style={{textDecoration:"none"}}>
                                   <AiFillStar/> Rate & Review Product
                                   </a>
                                   </Col>

                               
                                   <Col xs={1}> 
                                   
                               


                                   

                    <Button variant="primary"  style={{ backgroundColor:"white", border: "none" }} onClick={handleShow}>
                    <PiPencilSimpleLineBold style={{color:"blue",fontSize:20}}/>
                    </Button>

                    <Modal show={show} onHide={handleClose} animation={false} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>

                          <Dropdown>
                            <Dropdown.Toggle variant="Primary" id="dropdown-basic" style={{ backgroundColor: "#775DA6", color: "white" }}>
                              Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Lead Discovered</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Contact Initiated</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Meeting Arranged</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">offer Accepted</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>

                 



                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row className="mb-3">
                          <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder=" Name"

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                              required
                              type="Number"
                              placeholder=""
                              defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>
        

                        </Row>

                        <div>
                          <div className="row">
                            <div className="col-md-4">
                              <Form.Group controlId="dob">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                              </Form.Group>
                            </div>
                          </div>
                        </div> <br />

                        <div>
                          <h5>Click here to upload the file</h5>
                          <input type='file' />
                        </div>




                      </Modal.Body>
                      <Modal.Footer>
                 
                        <Button variant="primary" onClick={handleClose}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                       </Col>
                      </Row>

                     </Card>
                </Col>  

                 <Col lg={2}>
                  <Card style={{width: '18rem'}}>
                    <Card.Body>
                    <Card.Title>
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                      <div>
                        <h6 className="fw-bold">Order</h6>
                        <div style={{marginTop:-8}}>
                        <h6 style={{fontSize:14,fontWeight:""}}>Date,Time</h6>
                        </div>
                      </div>
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswR24076fmtGT5E1nuJCZJ_WaUbp9bczZnQ&usqp=CAU"
                        style={{width:50,height:50,borderRadius:50}}/>
                      </div>
                      </div>
                    </Card.Title>
                    <Card.Text>
                      <div className="d-flex " style={{borderBottom:"1px solid grey"}}>
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU"
                        style={{width:50,height:50,borderRadius:50}}/>
                      </div>
                      <div className="mx-2">
                        <h5>Vegetable Mixups</h5>
                        <h6>Vegetables fitter with egg</h6>
                        <div className="d-flex justify-content-between">
                        <h6>price</h6>
                        <h6>qty:1</h6>
                        </div>
                      </div>
                      </div>

                      <div className="d-flex mt-2 " style={{borderBottom:"1px solid grey"}}>
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU"
                        style={{width:50,height:50,borderRadius:50}}/>
                      </div>
                      <div className="mx-2">
                        <h5>Vegetable Mixups</h5>
                        <h6>Vegetables fitter with egg</h6>
                        <div className="d-flex justify-content-between">
                        <h6>price</h6>
                        <h6>qty:1</h6>
                        </div>
                      </div>
                      </div>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                    <div>
                      <h6>*2 items</h6>
                      <h6>$ 50</h6>
                    </div>
                    <div>
                      <Button>View Order</Button>
                    </div>
                    </div>
                    
                    </Card.Body>
                  </Card>

                </Col> *


              </Row> */}
              <Table striped bordered hover variant="" className="mt-4" responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>UserName</th>
          <th>Address</th>
          <th>Products</th>
          <th>Total</th>
          <th>Status</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Arun</td>
          <td>Ambal Nagar</td> 
         <td>shoe</td>
         <td>200</td>
          <td>active</td>
          <td>
          <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        
          <MenuItem key="edit" onClick={handleOpenModel} >
         Edit 
          </MenuItem>
          {/* <MenuItem key="remove" onClick={handleCancelModel} >
            Remove
          </MenuItem> */}
         
      </Menu>
    </div>
          </td>
        </tr>
        <tr> 
        </tr>
        <tr>
        </tr>
      </tbody>
                     </Table>  
                 
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Orders;

