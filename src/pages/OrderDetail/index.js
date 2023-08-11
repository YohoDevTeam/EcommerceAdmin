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


const OrderDetail = () => {
  

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
                        <th>Images</th>
                        <th>Product Name</th>
                         <th>Product Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td> <img
                            src="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=600"
                            style={{ width: 50, height: 50,borderRadius:50 }}
                          /></td>
                        <td> <a href="OrderProductDetail">Shoe</a></td>
                        <td>8</td>
                        <td>10</td>
                        <td>800</td>
                        
                        
                        
                      </tr>
                      <tr></tr>
                      <tr></tr>
                    </tbody>
                  </Table>
                <div className="d-flex justify-content-between p-3">
               <h1>Grand Total:</h1>
                <h1>800</h1>
                </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default OrderDetail;
