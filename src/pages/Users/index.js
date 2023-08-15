import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { FormControl } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BiSearch } from "react-icons/bi";

import { RiDeleteBinLine } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Table from "react-bootstrap/Table";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";

const Users = () => {
  const [userStatus, setUserStatus] = React.useState("");
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    const res = await axios.get(
      `http://192.168.29.102:8000/api/admin/users/listAll`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    // console.log(res);
    setUsers(res.data.data);
  };
  console.log(users);
  const handleEditUser = () => {};
  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
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
  const handleModel = () => {
    setCancelModel(false);
    handleCloseModel();
  };

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
                Edit
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                <Form.Label className="fw-bold mt-2">Status</Form.Label>
                <Form.Select
                  className="fw-bold "
                  value={userStatus}
                  onChange={(event) => setUserStatus(event.target.value)}
                >
                  <option>-----</option>
                  <option value="Active">Active</option>
                  <option value="InActive">In Active</option>
                </Form.Select>
                <div className="mt-5 d-flex justify-content-between align-items-center">
                  <div>
                    <Button variant="secondary" onClick={handleCloseModel}>
                      Close
                    </Button>
                  </div>
                  <div>
                    <Button variant="primary" onClick={handleCancelModel}>
                      Save Changes
                    </Button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>

          {/* <Modal
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
          </Modal> */}

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
              ></Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Are you sure you want to save the Changes?
                <div className="mt-5 d-flex justify-content-between align-items-center">
                  <div>
                    <Button variant="secondary" onClick={handleEditUser}>
                      Yes
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => setCancelModel(false)}
                    >
                      No
                    </Button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>

          <div>
            <div>
              <Form className="d-flex">
                <Form.Control placeholder="Search" className="w-25" />
                <Button type="text" className="mx-2">
                  <BiSearch />
                  Search
                </Button>
              </Form>
            </div>
          </div>
          <Table striped bordered hover variant="" className="mt-4" responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Full Name</th>
                <th>Nick Name</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>Gender</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users[0]?.map((item, index) => (
                <tr>
                  <td>{item.id}</td>
                  <td>
                    <img
                      src="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=600"
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                    />
                  </td>
                  <td>{item.full_name}</td>
                  <td>{item.nick_name}</td>
                  <td>{item.dob}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.gender}</td>
                  <td>{item.is_active == "yes" ? "Active" : "InActive"}</td>
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
                        {/* <MenuItem key="Remove" onClick={handleDeleteModel}>
                        Delete{" "}
                        <RiDeleteBinLine
                          style={{
                            fontSize: 28,
                            color: "red",
                            paddingLeft: 10,
                          }}
                        />
                      </MenuItem> */}
                      </Menu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default Users;
