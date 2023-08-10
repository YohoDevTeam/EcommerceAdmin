import React from "react";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { Col, FormControl, FormLabel } from "react-bootstrap";
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

import { useState } from "react";
import CompanyForm from "../../components/CompanyForm";
import DummyData from "../../constants/datacompanylist";
import { BiSearch } from "react-icons/bi";
import { Card } from "react-bootstrap";
import { RxDotFilled } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { RiDeleteBinLine } from "react-icons/ri";
import Table from "react-bootstrap/Table";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";


const CategoryDetail = () => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl(null);
  };

  const [openModel, setOpenModel] = React.useState(false);
  const handleOpenModel = () => {
    setOpenModel(true);
    handleClose4();
  };
  const handleCloseModel = () => setOpenModel(false);

  const [DeleteModel, setDeleteModel] = React.useState(false);
  const handleDeleteModel = () => {
    setDeleteModel(true);
    handleClose4();
  };
  const handleRemoveModel = () => setDeleteModel(false);

  const [CancelModel, setCancelModel] = React.useState(false);
  const handleCancelModel = () => {
    setCancelModel(true);
    handleClose4();
  };
  const handleModel = () => setCancelModel(false);


  const [openModel1, setOpenModel1] = React.useState(false);
  const handleOpenModel1 = () => {
    setOpenModel1(true);
    handleClose4();
  };
  const handleCloseModel1 = () => setOpenModel1(false);




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
                   <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                <Row>
                 
                  <Col>
                    <FormLabel className="fw-bold">Name</FormLabel>
                    <FormControl type="text" />
                  </Col>
                </Row>
                <FormLabel className="fw-bold mt-2">Images</FormLabel>
                <FormControl type="file" multiple />
                <FormLabel className="fw-bold mt-2">Description</FormLabel>
                <FormControl type="text" />

             
                <Row className="mt-2">
                
                  <Col>
                    <FormLabel className="fw-bold">Price</FormLabel>
                    <FormControl type="number" />

                    <FormLabel className="mt-2 fw-bold">Status</FormLabel>
                    <Form.Select className="fw-bold " >
                            <option>-----</option>
                              <option value="1">Active</option>
                                   <option value="2">In Active</option>
                                          
                                       </Form.Select>
                  </Col>
                </Row>
                
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
            open={DeleteModel}
            onClose={handleRemoveModel}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              >
                Delete
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Are you sure you want to remove this item
                <Row className="mt-3">
                  <Col>
                    <Button variant="secondary" onClick={handleRemoveModel}>
                      Yes
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={handleRemoveModel}>
                      No
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
                Cancel
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Are you sure you want to Cancel this item?
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

          <Modal
            keepMounted
            open={openModel1}
            onClose={handleCloseModel1}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              >
                 Add New Product
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                <Row>
                 
                  <Col>
                    <FormLabel className="fw-bold">Name</FormLabel>
                    <FormControl type="text" />
                  </Col>
                </Row>
                <FormLabel className="fw-bold mt-2">Images</FormLabel>
                <FormControl type="file" multiple />
                <FormLabel className="fw-bold mt-2">Description</FormLabel>
                <FormControl type="text" />

             
                <Row className="mt-2">
                
                  <Col>
                    <FormLabel className="fw-bold">Price</FormLabel>
                    <FormControl type="number" />

                    <FormLabel className="mt-2 fw-bold">Status</FormLabel>
                    <Form.Select className="fw-bold " >
                            <option>-----</option>
                              <option value="1">Active</option>
                                   <option value="2">In Active</option>
                                          
                                       </Form.Select>
                  </Col>
                </Row>
                
                <Row className="mt-3">
                  <Col>
                    <Button variant="secondary" onClick={handleCloseModel1}>
                      Close
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={handleCloseModel1}>
                      Save Changes
                    </Button>
                  </Col>
                </Row>
              </Typography>
            </Box>
          </Modal>

          <div style={{ overflowX: "hidden" }}>
           
            <div>
                <Row>
               <Col>   
              <Card style={{borderWidth:0}} >
                <Card.Title className="text-center fw-bold">
                    User Details
                </Card.Title>
                <div className="d-flex  p-2">
                <div style={{display:"flex",alignItems:"center"}}>
                <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" style={{width:60,height:60,borderRadius:60}}/>
              </div>
              <div className="mx-4">
                <div className="fw-bold">Name: Arun</div>
                <div className="fw-bold">PhoneNumber: 9585949856</div>
                <div className="fw-bold">EmailId:ABC@gmail.com</div>
              </div>
              </div>
              </Card>
              </Col>
               <Col>   
              <Card style={{borderWidth:0}} >
              <Card.Title className="text-center fw-bold">
                    Address
                </Card.Title>
               <div className="fw-bold">
                Address:<br/>
                NO:5,6 sidha street,
                Ambal Nagar,
                Keelkatali<br/>
                Chennai-60017

               </div>
              </Card>
              </Col>
              </Row>
            
          {/* <Table striped bordered hover variant="" className="mt-4" responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Images</th>

                <th>Status</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Arun</td>
                <td>
                  <img
                    src="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=600"
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                </td>

                <td>active</td>

               
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </Table> */}

                <h4 className="fw-bold mt-3">Product List</h4>
                  <Table
                    striped
                    bordered
                    hover
                    
                    variant=""
                    className="mt-3 "
                  
                  >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>
                         Images
                        </th>
                        <th>Description</th>
                        <th>Price</th>

                        
                     
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Arun</td>
                        <td> <img
                            src="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=600"
                            style={{ width: 50, height: 50,borderRadius:50 }}
                          /></td>
                        <td>photo</td>
                        <td>800</td>
                        
                        
                        
                      </tr>
                      <tr></tr>
                      <tr></tr>
                    </tbody>
                  </Table>
                <div className="d-flex justify-content-between p-3">
               <h1>Total:</h1>
                <h1>800</h1>
                </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CategoryDetail;
