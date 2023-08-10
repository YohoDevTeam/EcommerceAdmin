import React from "react";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Form from 'react-bootstrap/Form';
import { FormControl } from "react-bootstrap";
import {BsPlusCircle} from "react-icons/bs";
import { Card } from "react-bootstrap";
import {PiPencilSimpleLineDuotone} from "react-icons/pi";
import Button from 'react-bootstrap/Button';

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillDownCircle} from "react-icons/ai"
import { BiSearch } from "react-icons/bi";


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
const Message = () => {

    const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModel1, setOpenModel1] = React.useState(false);
  const handleOpenModel1 = () => {
    setOpenModel1(true);
    handleClose();
  };
  const handleCloseModel1 = () => setOpenModel1(false);
  






  const [openModel, setOpenModel] = React.useState(false);
  const handleOpenModel = () => {
    setOpenModel(true);
    handleClose();
  };
  const handleCloseModel = () => setOpenModel(false);



  const [DeleteModel, setDeleteModel] = React.useState(false);
  const handleDeleteModel = () => {
    setDeleteModel(true);
    handleClose();
  };
  const handleRemoveModel = () => setDeleteModel(false);

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
                  Edit Category
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                <Form.Label className="fw-bold">Name</Form.Label>
                    <FormControl type="text" />
                    <Form.Label className="fw-bold mt-2">Images</Form.Label>
                <FormControl type="file" multiple />
                 
                


                      <h6 className="mt-2 fw-bold">Status</h6>
                    <Form.Select className="fw-bold " >
                            <option>-----</option>
                              <option value="1">Active</option>
                                   <option value="2">In Active</option>
                                          
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
                New Product
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            
                  
                  
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <FormControl type="text" />
                  
                
                <Form.Label className="fw-bold mt-2">Images</Form.Label>
                <FormControl type="file" multiple />
                <Form.Label className="fw-bold mt-2">Description</Form.Label>
                <FormControl type="text" />

              
                <Row className="mt-2">
                
                  <Col>
                    <Form.Label className="fw-bold">Price</Form.Label>
                    <FormControl type="number" />
                  </Col>
                </Row>
               

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
                  Add Category
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                <Form.Label className="fw-bold">Name</Form.Label>
                    <FormControl type="text" />
                    <Form.Label className="fw-bold mt-2">Images</Form.Label>
                <FormControl type="file" multiple />
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
        

      <div className="d-flex justify-content-between">
      <Form className="d-flex">
                    <Form.Control placeholder="Search Your Order here" className="w-50" />
                    <Button type="text" className="mx-2">
                      <BiSearch />
                      Search 
                    </Button>
              </Form>
      <Button  onClick={handleOpenModel1} >
            Add Category
                    </Button>
            
      </div>
          
          <div className="mt-2">
              <FormControl type="text" placeholder="Home/Categories" />
          </div>
         
          {/* <Card className="mt-2">
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div className=" d-flex p-3">
        
          <img src="https://www.freepnglogos.com/uploads/shoes-png/shoes-wasatch-running-3.png" style={{width:60,height:60,borderRadius:60,marginRight:20}}/>
          <p style={{marginTop:16}}>Shoes</p>
          </div>
          <div className="p-3">
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
        
          <MenuItem key="edit" onClick={handleOpenModel}  >
         Edit 
          </MenuItem>
          <MenuItem key="remove" onClick={handleDeleteModel} >
            Remove
          </MenuItem>
          <MenuItem key="Product" onClick={handleCancelModel}  >
            Add New Product
          </MenuItem>
      
      </Menu>
      <AiFillDownCircle style={{fontSize:20}}/>
    </div>
          </div>
          </div>
          </Card>  */}

{/* <div className="mt-3">
  <h3>Product List</h3>
</div> */}

 {/* <div>
  <Row>
    <Col lg={3}>
  <Card>
    <Card.Title className="d-flex justify-content-center">
      <img src="https://www.pngmart.com/files/6/Shoe-PNG-Clipart.png" style={{width:150}}/>
    </Card.Title>
    <Card.Body>
      <p className="fw-bold text-secondary">BRUTON</p>
      <p className="text-primary">Combo Pack of 2 Sports Shoes</p>
      <p className="fw-bold">₹499  <strike>₹2,499</strike></p>
      <p className="fw-bold text-secondary">Size:6,7,8,9</p>
    </Card.Body>
  </Card>
  </Col>
  <Col lg={3}>
  <Card>
    <Card.Title className="d-flex justify-content-center">
      <img src="https://www.pngmart.com/files/7/Sneakers-PNG-Photo.png" style={{width:180}}/>
    </Card.Title>
    <Card.Body>
      <p className="fw-bold text-secondary">Nike</p>
      <p className="text-primary">Sports Running Shoes For Men</p>
      <p className="fw-bold">₹500 <strike>₹2500</strike></p>
      <p className="fw-bold  text-secondary">Size:6,7,8,9,10</p>
    </Card.Body>
  </Card>
  </Col>
  <Col lg={3}>
  <Card>
    <Card.Title className="d-flex justify-content-center">
      <img src="https://www.pngmart.com/files/6/Shoe-Transparent-PNG.png" style={{width:150}}/>
    </Card.Title>
    <Card.Body>
      <p className="fw-bold text-secondary">Addidas</p>
      <p className="text-primary">Combo Pack of 2 Casual Shoes</p>
      <p className="fw-bold">₹600 <strike>₹3,000</strike></p>
      <p className="fw-bold  text-secondary">Size:6,7,8,9</p>
    </Card.Body>
  </Card>
  </Col>
  <Col lg={3}>
  <Card>
    <Card.Title className="d-flex justify-content-center">
      <img src="https://www.pngmart.com/files/6/Shoe-PNG-Clipart.png" style={{width:150}}/>
    </Card.Title>
    <Card.Body>
      <p className="fw-bold text-secondary">Nobelite </p>
      <p className="text-primary">Combo Pack of 4 Sports Shoes</p>
      <p className="fw-bold">₹700 <strike>₹300</strike></p>
      <p className="fw-bold  text-secondary">Size:6,7,8</p>
    </Card.Body>
  </Card>
  </Col>
 
 
  </Row>
</div>  */}
                  <Table striped bordered hover variant="" className="mt-4" responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Images</th>
          
          <th>Status</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Arun</td>
          <td><img src="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:50,height:50,borderRadius:50}}/></td>
          
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
        
          <MenuItem key="edit" onClick={handleOpenModel}  >
         Edit 
          </MenuItem>
          <MenuItem key="remove" onClick={handleDeleteModel} >
            Remove
          </MenuItem>
         
      
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
                 

       
        </Box>
      </Box>
    </>
  );
};

export default Message;
