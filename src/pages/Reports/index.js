import React from 'react'
import {IoSearchSharp} from "react-icons/io5"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import COLORS from "../../constants/theme"
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Summary from "../Reports/Tabs/Summary";
import Archieved from "../Reports/Tabs/Archieved";
import Published  from "../Reports/Tabs/Published";
import  Draft  from "../Reports/Tabs/Draft";
import Custom from "../Reports/Tabs/Custom"
import NavBar from '../../components/NavBar';
import { Box, Hidden } from '@mui/material';
import SideBar from '../../components/SideBar';
const Reports = () => {
  const [key, setKey] = useState('home');
  return (
    <>
    <NavBar/>
    <Box height={60}/>
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1,}}>
      <div  style={{backgroundColor:"#f7f6f6"}}>
      <Container fluid className='my-3 '>

        <Row style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
          <Col >

           <header style={{ fontSize:35,fontWeight:"600",opacity:'0.8'}}>Reports</header>
          </Col>

          <Col style={{justifyContent:'flex-end',width:"100%",display:"flex"}}>
            <div  className='border ' style={{display:"flex",width:230,height:40,borderRadius:13}}>

            <IoSearchSharp style={{fontSize:25,
            fontWeight:'bold',
            color:COLORS.COLORS.iconColor,
            margin:"auto",
            borderRadius:15,
           
            }}/>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              
              style={{border:'none',width:190,fontWeight:"500"}}
            /> 
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='mt-5 '>
      <Tabs
       defaultActiveKey="Summary"
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey=" Summary" title=" Summary" >
        <Summary/>
      </Tab>
      <Tab eventKey="  Custom" title="  Custom">
        <Custom/>
      </Tab>
      <Tab eventKey="  Draft" title="  Draft" >
        <Draft/>
      </Tab>
      <Tab eventKey="  Published" title="  Published">
        <Published/>
      </Tab>
      <Tab eventKey=" Archived" title=" Archived" style={{}} >
        <Archieved/>
      </Tab>
    </Tabs>
      </Container>
        
    </div>
      </Box>
    </Box>
  </>

   
  )
}

export default Reports