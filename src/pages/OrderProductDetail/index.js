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


const OrderProductDetail = () => {
 

  return (
    <>
      <NavBar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         

          <div style={{ overflowX: "hidden" }}>
            {/* <div className="d-flex justify-content-between">
              <Form className="d-flex">
                    <Form.Control placeholder="Search" className="w-50"  />
                    <Button type="Search Orders" className="mx-2">
                      <BiSearch />
                      Search
                    </Button>
              </Form>
              <Button onClick={handleOpenModel1}>Add Product</Button>
            </div> */}

            <div>
                <h1>Product Detail</h1>
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
                        <th>Title</th>
                        <th>
                         Images
                        </th>
                        <th>Caption</th>
                        <th>Total Quantity</th>
                        <th>Current Quantity</th>
                        <th>Sold Quantity</th>

                        <th>Price</th>

                        
                     
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>food</td>
                        <td> <img
                            src="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=600"
                            style={{ width: 50, height: 50,borderRadius:50 }}
                          /></td>
                        <td>photo</td>
                        <td>600</td>
                        <td>400</td>
                        <td>200</td>
                        <td>Rs.600</td>
                        
                        
                        
                          
                      </tr>
                      <tr></tr>
                      <tr></tr>
                    </tbody>
                  </Table>
                
         
              
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default OrderProductDetail;
