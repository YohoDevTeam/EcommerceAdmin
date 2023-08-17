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

import { Link, useLocation } from "react-router-dom";
const OrderDetail = () => {
  const location = useLocation();

  const data = location.state.data;
  console.log(location.state.data);

  return (
    <>
      <NavBar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div style={{ overflowX: "hidden" }}>
            <div>
              <Row>
                <Col>
                  <Card style={{ borderWidth: 0 }}>
                    <Card.Title className="text-center fw-bold">
                      User Details
                    </Card.Title>
                    <div className="d-flex  p-2">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                          style={{ width: 60, height: 60, borderRadius: 60 }}
                        />
                      </div>
                      <div className="mx-4">
                        <div className="fw-bold">
                          Name:{data?.user?.full_name}
                        </div>
                        <div className="fw-bold">
                          PhoneNumber: {data?.user?.phone}
                        </div>
                        <div className="fw-bold">
                          Email: {data?.user?.email}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ borderWidth: 0 }}>
                    <Card.Title className="text-center fw-bold">
                      Address
                    </Card.Title>
                    <div className="fw-bold">
                      <br />
                      {data?.address?.street}, {data?.address?.city},{" "}
                      {data?.address?.state}
                      <br />
                      {data?.address?.city}-{data?.address?.postal_code}
                    </div>
                  </Card>
                </Col>
              </Row>

              <h4 className="fw-bold mt-3">Product List</h4>
              <Table striped bordered hover variant="" className="mt-3 ">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Product Id</th>
                    <th>Product Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.items?.map((item, index) => (
                    <tr>
                      <td>{item.order_id}</td>
                      <td>
                        {" "}
                        <Link
                          to={"ProductDetail"}
                          state={{ data: item.products }}
                        >
                          {item.product_id}
                        </Link>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.product_total}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="d-flex justify-content-between p-3">
                <h1>Grand Total:</h1>
                <h1>{data?.total_amount}</h1>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default OrderDetail;
