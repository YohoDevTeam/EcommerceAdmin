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

const Deals = () => {
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

          <div style={{ overflowX: "hidden" }}>
            <div>
              <Form className="d-flex">
                
                
                  
                    <Form.Control placeholder="Search" className="w-25"  />
                  

                  
                    <Button type="Search Orders" className="mx-2">
                      <BiSearch />
                      Search
                    </Button>
                
              
              </Form>
            </div>

            <div>
              
                {/* <Col lg={2}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Filter</Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h6 style={{ fontWeight: "bold" }}>CATEGORIES</h6>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Mobiles</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Fashion</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Electronics</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>TVs & Appliances</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Sports</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Home & Furniture</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Baby & Kids</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Grocery</p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <Form.Check
                            aria-label="option 1"
                            style={{ marginRight: 10 }}
                          />
                          <p>Beauty</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col> */}

                
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

                        <th>Status</th>
                     
                        <th></th>
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
                        <td>active</td>
                        
                        <td>
                          <div>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={handleClick1}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                "aria-labelledby": "long-button",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose4}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem key="Edit" onClick={handleOpenModel}>
                                Edit
                              </MenuItem>
                              <MenuItem
                                key="Remove"
                                onClick={handleDeleteModel}
                              >
                                Delete{" "}
                                <RiDeleteBinLine
                                  style={{
                                    fontSize: 28,
                                    color: "red",
                                    paddingLeft: 10,
                                  }}
                                />
                              </MenuItem>
                              <MenuItem
                                key="Cancel"
                                onClick={handleCancelModel}
                              >
                                Cancel Order
                              </MenuItem>
                            </Menu>
                          </div>
                        </td>
                      </tr>
                      <tr></tr>
                      <tr></tr>
                    </tbody>
                  </Table>
                
                <div className="d-md-none d-block">
                  <Row>
                    <Col lg={3}>
                      <Card>
                        <Card.Title className="d-flex justify-content-end">
                          <div>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={handleClick1}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                "aria-labelledby": "long-button",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose4}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem key="Edit" onClick={handleOpenModel}>
                                Edit
                              </MenuItem>
                              <MenuItem
                                key="Remove"
                                onClick={handleDeleteModel}
                              >
                                Delete{" "}
                                <RiDeleteBinLine
                                  style={{
                                    fontSize: 28,
                                    color: "red",
                                    paddingLeft: 10,
                                  }}
                                />
                              </MenuItem>
                              <MenuItem
                                key="Cancel"
                                onClick={handleCancelModel}
                              >
                                Cancel Order
                              </MenuItem>
                            </Menu>
                          </div>
                        </Card.Title>
                        <Card.Body>
                          <div className=" d-flex justify-content-center">
                            <img
                              src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png"
                              style={{ width: 100, marginTop: -40 }}
                            />
                          </div>

                          <p className="fw-bold text-secondary text-center">
                            APPLE iphone 12(128gb)
                          </p>

                          <p className="text-primary " style={{ fontSize: 14 }}>
                            Combo Pack of 2 Sports Shoes
                          </p>
                          <p className="fw-bold " style={{ fontSize: 16 }}>
                            ₹55000 <strike>₹70000</strike>
                          </p>
                          <p style={{ color: "grey" }}>Size:6,7,8,9</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3}>
                      <Card>
                        <Card.Title className="d-flex justify-content-end">
                          <div>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={handleClick1}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                "aria-labelledby": "long-button",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose4}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem key="Edit" onClick={handleOpenModel}>
                                Edit
                              </MenuItem>
                              <MenuItem
                                key="Remove"
                                onClick={handleDeleteModel}
                              >
                                Delete{" "}
                                <RiDeleteBinLine
                                  style={{
                                    fontSize: 28,
                                    color: "red",
                                    paddingLeft: 10,
                                  }}
                                />
                              </MenuItem>
                              <MenuItem
                                key="Cancel"
                                onClick={handleCancelModel}
                              >
                                Cancel Order
                              </MenuItem>
                            </Menu>
                          </div>
                        </Card.Title>
                        <Card.Body>
                          <div className=" d-flex justify-content-center">
                            <img
                              src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png"
                              style={{ width: 100, marginTop: -40 }}
                            />
                          </div>

                          <p className="fw-bold text-secondary text-center">
                            APPLE iphone 12(128gb)
                          </p>

                          <p className="text-primary " style={{ fontSize: 14 }}>
                            Combo Pack of 2 Sports Shoes
                          </p>
                          <p className="fw-bold " style={{ fontSize: 16 }}>
                            ₹55000 <strike>₹70000</strike>
                          </p>
                          <p style={{ color: "grey" }}>Size:6,7,8,9</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3}>
                      <Card>
                        <Card.Title className="d-flex justify-content-end">
                          <div>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={handleClick1}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                "aria-labelledby": "long-button",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose4}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem key="Edit" onClick={handleOpenModel}>
                                Edit
                              </MenuItem>
                              <MenuItem
                                key="Remove"
                                onClick={handleDeleteModel}
                              >
                                Delete{" "}
                                <RiDeleteBinLine
                                  style={{
                                    fontSize: 28,
                                    color: "red",
                                    paddingLeft: 10,
                                  }}
                                />
                              </MenuItem>
                              <MenuItem
                                key="Cancel"
                                onClick={handleCancelModel}
                              >
                                Cancel Order
                              </MenuItem>
                            </Menu>
                          </div>
                        </Card.Title>
                        <Card.Body>
                          <div className=" d-flex justify-content-center">
                            <img
                              src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png"
                              style={{ width: 100, marginTop: -40 }}
                            />
                          </div>

                          <p className="fw-bold text-secondary text-center">
                            APPLE iphone 12(128gb)
                          </p>

                          <p className="text-primary " style={{ fontSize: 14 }}>
                            Combo Pack of 2 Sports Shoes
                          </p>
                          <p className="fw-bold " style={{ fontSize: 16 }}>
                            ₹55000 <strike>₹70000</strike>
                          </p>
                          <p style={{ color: "grey" }}>Size:6,7,8,9</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3}>
                      <Card>
                        <Card.Title className="d-flex justify-content-end">
                          <div>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={handleClick1}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                "aria-labelledby": "long-button",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose4}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem key="Edit" onClick={handleOpenModel}>
                                Edit
                              </MenuItem>
                              <MenuItem
                                key="Remove"
                                onClick={handleDeleteModel}
                              >
                                Delete{" "}
                                <RiDeleteBinLine
                                  style={{
                                    fontSize: 28,
                                    color: "red",
                                    paddingLeft: 10,
                                  }}
                                />
                              </MenuItem>
                              <MenuItem
                                key="Cancel"
                                onClick={handleCancelModel}
                              >
                                Cancel Order
                              </MenuItem>
                            </Menu>
                          </div>
                        </Card.Title>
                        <Card.Body>
                          <div className=" d-flex justify-content-center">
                            <img
                              src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png"
                              style={{ width: 100, marginTop: -40 }}
                            />
                          </div>

                          <p className="fw-bold text-secondary text-center">
                            APPLE iphone 12(128gb)
                          </p>

                          <p className="text-primary " style={{ fontSize: 14 }}>
                            Combo Pack of 2 Sports Shoes
                          </p>
                          <p className="fw-bold " style={{ fontSize: 16 }}>
                            ₹55000 <strike>₹70000</strike>
                          </p>
                          <p style={{ color: "grey" }}>Size:6,7,8,9</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Deals;
