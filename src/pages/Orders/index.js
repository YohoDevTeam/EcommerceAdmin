import React, { useEffect } from "react";
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
import Table from "react-bootstrap/Table";
import Typography from "@mui/material/Typography";
import { FormControl } from "react-bootstrap";
import axios from "axios";
const Orders = () => {
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    const res = await axios.get(
      `https://www.bictree.xyz/api/admin/orders/lists`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log("ORDERS : ",res);
    setOrders(res.data.data);
  };
  const [orderStatus, setOrderStatus] = useState("");

  const handleCancelOrder = () => {};

  const handleEditOrder = () => {};

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
  const handleModel = () => {
    setCancelModel(false);
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
                Edit Order Details
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                <Form.Label className="mt-2 fw-bold">Status</Form.Label>
                <Form.Select
                  className="fw-bold "
                  onChange={(event) => setOrderStatus(event.target.value)}
                >
                  <option>-----</option>

                  <option value="Cancelled">Cancelled</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Pending">Pending</option>
                  <option value="Delivered">Delivered</option>
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
                Are you sure you want to save the changes?
                <div className="mt-5 d-flex justify-content-between align-items-center">
                  <div>
                    <Button variant="secondary" onClick={handleEditOrder}>
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

          <div style={{ backgroundColor: "#F5F5F5", overflowX: "hidden" }}>
            <div>
              <Form className="d-flex">
                <Form.Control
                  placeholder="Search Your Order here"
                  className="w-25"
                />
                <Button type="text" className="mx-2">
                  <BiSearch />
                  Search
                </Button>
              </Form>
            </div>

            <div>
              <Table
                striped
                bordered
                hover
                variant=""
                className="mt-4"
                responsive
              >
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Customer Id</th>
                    <th>Date</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, index) => (
                    <tr>
                      <td>
                        <a href="OrderDetail">{item.order_id}</a>
                      </td>
                      <td>{item.user_id}</td>
                      <td>{item.order_date}</td>
                      <td>{item.total_amount}</td>

                      <td>{item.status}</td>
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
                          </Menu>
                        </div>
                      </td>
                    </tr>
                  ))}
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
