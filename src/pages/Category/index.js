import React from "react";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Card } from "react-bootstrap";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import Button from "react-bootstrap/Button";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillDownCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Category = () => {
  
  // Hooks
  const [categoryImage, setCategoryImage] = useState();
  const [categoryName, setCategoryName] = useState("");
  const [categoryStatus, setCategoryStatus] = useState();


  const handleAddCategory = () => {
    const data = {
      name: categoryName,
      image: categoryImage,
      status: categoryStatus,
    };
    console.log(data);
    handleCloseModel2();
  };

  const handleDeleteCategory = ()=>{

  }

  const handleEditCategory = ()=>{

  }


  const ITEM_HEIGHT = 48;
  const status = " InActive";
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

  const [openModel2, setOpenModel2] = React.useState(false);
  const handleOpenModel2 = () => {
    setOpenModel2(true);
    handleClose();
  };
  const handleCloseModel2 = () => {
    setOpenModel2(false);
    handleCloseModel1();
  };

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

  const [EditModel, setEditModel] = React.useState(false);
  const handleEditModel = () => {
    setEditModel(true);
    handleClose();
  };
  const handleEditiModel = () => {
    setEditModel(false);
    handleCloseModel();
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
                Edit Category
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                <Form.Label className="fw-bold">Name</Form.Label>
                <FormControl type="text" />
                <Form.Label className="fw-bold mt-3">Images</Form.Label>
                <FormControl type="file" multiple />

                <h6 className="mt-3 fw-bold">Status</h6>
                <Form.Select className="fw-bold ">
                  <option>-----</option>
                  <option value="1">Active</option>
                  <option value="2">In Active</option>
                </Form.Select>

                <div className="mt-5 d-flex align-items-center justify-content-between">
                  <div>
                    <Button variant="secondary" onClick={handleCloseModel}>
                      Close
                    </Button>
                  </div>
                  <diiv>
                    <Button variant="primary" onClick={handleEditModel}>
                      Save Changes
                    </Button>
                  </diiv>
                </div>
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
                <div className="mt-3 d-flex justify-content-between align-items-center">
                  <div>
                    <Button variant="secondary" onClick={handleDeleteCategory}>
                      Yes
                    </Button>
                  </div>
                  <div>
                    <Button variant="primary" onClick={handleRemoveModel}>
                      No
                    </Button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>

          {/* <Modal
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

                <div className="mt-3 justify-content-between  align-items-center">
                  <div>
                    <Button variant="secondary" onClick={handleModel}>
                      Yes
                    </Button>
                  </div>
                  <div>
                    <Button variant="primary" onClick={handleModel}>
                      No
                    </Button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal> */}

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
                <FormControl
                  type="text"
                  value={categoryName}
                  onChange={(text) => setCategoryName(text.target.value)}
                />
                <Form.Label className="fw-bold mt-3">Image</Form.Label>
                <FormControl
                  type="file"
                  onChange={(event) => setCategoryImage(event.target.files[0])}
                />
                <h6 className="mt-3 fw-bold">Status</h6>
                <Form.Select
                  className="fw-bold "
                  onChange={(evet) => setCategoryStatus(evet.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="InActive">In Active</option>
                </Form.Select>
                <div className="mt-5 d-flex justify-content-between align-items-center">
                  <div>
                    <Button variant="secondary" onClick={handleCloseModel1}>
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button variant="primary" onClick={handleOpenModel2}>
                      Add
                    </Button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>

          <Modal
            keepMounted
            open={openModel2}
            onClose={handleCloseModel2}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              ></Typography>
              <Typography
                id="keep-mounted-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                Are you sure want to add the category?
                <div className="mt-5 d-flex justify-content-between align-items-center">
                  <div>
                    <Button variant="secondary" onClick={handleAddCategory}>
                      Yes
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => setOpenModel2(false)}
                    >
                      No
                    </Button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>

          <Modal
            keepMounted
            open={EditModel}
            onClose={handleEditiModel}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              ></Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Are you sure want to Edit the Product?
                <div className="mt-5 d-flex align=items-center justify-content-between">
                  <div>
                    <Button variant="primary" onClick={handleEditCategory}>
                      yes
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="secondary"
                      onClick={() => setEditModel(false)}
                    >
                      No
                    </Button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>

          <div className="d-flex justify-content-between">
            <Form className="d-flex">
              <Form.Control
                placeholder="Search Your Order here"
                className="w-50"
              />
              <Button type="text" className="mx-2">
                <BiSearch />
                Search
              </Button>
            </Form>
            <Button onClick={handleOpenModel1}>Add Category</Button>
          </div>

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
                <td>
                  <img
                    src="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=600"
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                </td>

                <td style={{ color: status == "Active" ? "green" : "red" }}>
                  {status}
                </td>

                <td>
                  <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
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
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      <MenuItem key="edit" onClick={handleOpenModel}>
                        Edit
                      </MenuItem>
                      <MenuItem key="remove" onClick={handleDeleteModel}>
                        Remove
                      </MenuItem>
                    </Menu>
                  </div>
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default Category;
